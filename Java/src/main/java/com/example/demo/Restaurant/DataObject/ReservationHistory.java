package com.example.demo.Restaurant.DataObject;

import com.example.demo.Restaurant.Domain.RestaurantTable;
import java.time.LocalDate;
import java.time.LocalTime;

public class ReservationHistory {
    private Long id;
    private RestaurantTable table;
    private LocalDate reservationDate;
    private LocalTime reservationTime;
    private LocalTime reservationEndTime;


    public ReservationHistory() {}

    public ReservationHistory(Long id, RestaurantTable table, LocalDate reservationDate,
                              LocalTime reservationTime, LocalTime reservationEndTime) {
        this.id = id;
        this.table = table;
        this.reservationDate = reservationDate;
        this.reservationTime = reservationTime;
        this.reservationEndTime = reservationEndTime;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RestaurantTable getTable() {
        return table;
    }

    public void setTable(RestaurantTable table) {
        this.table = table;
    }

    public LocalDate getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(LocalDate reservationDate) {
        this.reservationDate = reservationDate;
    }

    public LocalTime getReservationTime() {
        return reservationTime;
    }

    public void setReservationTime(LocalTime reservationTime) {
        this.reservationTime = reservationTime;
    }

    public LocalTime getReservationEndTime() {
        return reservationEndTime;
    }

    public void setReservationEndTime(LocalTime reservationEndTime) {
        this.reservationEndTime = reservationEndTime;
    }
}