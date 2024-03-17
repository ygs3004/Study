package com.example.jpa.exception;

public class NotEnoughStockException extends RuntimeException{
    public NotEnoughStockException(String s) {
        super(s);
    }
}
