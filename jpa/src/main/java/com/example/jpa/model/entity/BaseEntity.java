package com.example.jpa.model.entity;

import jakarta.persistence.MappedSuperclass;

import java.util.Date;

@MappedSuperclass
public class BaseEntity {

    private Date createDate;
    private Date lastModifiedDate;

}
