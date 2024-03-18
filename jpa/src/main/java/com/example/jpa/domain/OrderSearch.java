package com.example.jpa.domain;

import com.example.jpa.model.entity.Order;
import com.example.jpa.model.enums.OrderStatus;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.Specification;

import static com.example.jpa.domain.OrderSpec.memberNameLike;
import static com.example.jpa.domain.OrderSpec.orderStatusEq;
import static org.springframework.data.jpa.domain.Specification.where;

@Getter
@Setter
public class OrderSearch {

    private String memberName;
    private OrderStatus orderStatus;

    public Specification<Order> toSpecification() {
        return where(memberNameLike(memberName)).and(orderStatusEq(orderStatus));
    }

}
