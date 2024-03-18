package com.example.jpa.domain;

import com.example.jpa.model.entity.Member;
import com.example.jpa.model.entity.Order;
import com.example.jpa.model.enums.OrderStatus;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

public class OrderSpec {

    public static Specification<Order> memberNameLike(final String memberName){
        return new Specification<Order>() {
            @Override
            public Predicate toPredicate(Root<Order> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                if(!StringUtils.hasText(memberName)) return null;
                Join<Order, Member> m = root.join("member", JoinType.INNER);
                return criteriaBuilder.like(m.<String>get("name"), "%" + memberName + "%");
            }
        };
    }

    public static Specification<Order> orderStatusEq(final OrderStatus orderStatus){
        return new Specification<Order>() {
            @Override
            public Predicate toPredicate(Root<Order> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                if(orderStatus == null) return null;
                return criteriaBuilder.equal(root.get("status"), orderStatus);
            }
        };
    }
}
