package com.example.jpa.entity;

import com.example.jpa.model.entity.Member;
import com.example.jpa.model.entity.Order;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;


@SpringBootTest
public class JpaTest {

    @Autowired
    EntityManager em;

    @Test
    public void emTest() {
        Assertions.assertNotNull(em);
    }

    @Test
    @Transactional
    @Commit
    public void graphTest() throws Exception {
        Member member = new Member();
        Order order = new Order();

        member.getOrders().add(order);
        order.setMember(member);
        em.persist(order);
        em.persist(member);
        em.flush();
        // throw new Exception();
    }

}
