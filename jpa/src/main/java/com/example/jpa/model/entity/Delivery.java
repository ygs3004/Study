package com.example.jpa.model.entity;

import com.example.jpa.model.enums.DeliveryStatus;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
public class Delivery {

    @Id
    @GeneratedValue
    @Column(name = "DELIVERY_ID")
    Long id;

    @OneToOne(mappedBy = "delivery")
    private Order order;

    @Embedded
    private Address address;

    @Enumerated(EnumType.STRING)
    private DeliveryStatus status;


}
