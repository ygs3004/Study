package com.example.jpa.service;

import com.example.jpa.exception.NotEnoughStockException;
import com.example.jpa.model.entity.*;
import com.example.jpa.model.enums.OrderStatus;
import com.example.jpa.repository.OrderRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.h2.command.dml.MergeUsing;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@Transactional
public class OrderServiceTest {

    @PersistenceContext
    EntityManager em;

    @Autowired
    OrderService orderService;

    @Autowired
    OrderRepository orderRepository;

    @Test
    @DisplayName("상품 주문 테스트")
    public void orderTest() {
        // Given
        Member member = createMember();
        Item item = createBook("JPA 책", 10000, 10);
        int orderCount = 2;

        // When
        Long orderId = orderService.order(member.getId(), item.getId(), orderCount);

        // Then
        Order getOrder = orderRepository.findOne(orderId);

        assertEquals(OrderStatus.ORDER, getOrder.getStatus(), "상품 주문시 최초상태 OrderStatus.ORDER");
        assertEquals(1, getOrder.getOrderItems().size(), "상품 종류의 숫자 체크");
        assertEquals(10000 * 2, getOrder.getTotalPrice(), "주문가격 체크(가격 * 수량)");
        assertEquals(8, item.getStockQuantity(), "주문수량 만큼의 재고 감소체크");
    }

    @Test
    @DisplayName("상품 주문 재고량 초과 테스트")
    public void orderOverStockTest() {
        Member member = createMember();
        Item item = createBook("시골 JPA", 10000, 10);
        int orderCount = 11;

        assertThrows(NotEnoughStockException.class, () -> {
            orderService.order(member.getId(), item.getId(), orderCount);
        }, "재고량 이상 주문시 재고부족 Exception 이 발생하여야 한다.");
    }
    
    @Test
    @DisplayName("주문 취소 테스트")
    public void orderCancelTest() {
        // Given
        Member member = createMember();
        Item item = createBook("시골 JPA", 10000, 10);
        int orderCount = 2;

        // When
        Long orderId = orderService.order(member.getId(), item.getId(), orderCount);
        orderService.cancelOrder(orderId);

        // Then
        Order getOrder = orderRepository.findOne(orderId);

        assertEquals(OrderStatus.CANCEL, getOrder.getStatus(), "주문 취소시 상태는 취소로 변경되어야 한다.");
        assertEquals(10, item.getStockQuantity(), " 주문이 취소된 상품은 취소량 만큼 재고가 증가해야한다.");
    }

    private Member createMember() {
        Address address = new Address();
        address.setCity("서울");
        address.setStreet("강가");
        address.setZipcode("123-123");

        Member member = new Member();
        member.setName("회원1");
        member.setAddress(address);
        em.persist(member);
        return member;
    }

    private Book createBook(String name, int price, int stockQuantity) {
        Book book = new Book();
        book.setName(name);
        book.setStockQuantity(stockQuantity);
        book.setPrice(price);
        em.persist(book);
        return book;
    }


}
