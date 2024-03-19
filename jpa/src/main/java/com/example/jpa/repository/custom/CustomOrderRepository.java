package com.example.jpa.repository.custom;

import com.example.jpa.domain.OrderSearch;
import com.example.jpa.model.entity.Order;

import java.util.List;

public interface CustomOrderRepository {

    public List<Order> search(OrderSearch orderSearch);

}
