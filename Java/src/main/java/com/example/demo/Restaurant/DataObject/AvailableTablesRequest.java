package com.example.demo.Restaurant.DataObject;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

//@Data
public class AvailableTablesRequest {
    private int people;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;

    public int getPeople() {
        return people;
    }

    public void setPeople(int people) {
        this.people = people;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public AvailableTablesRequest(int people, LocalDate date, LocalTime startTime, LocalTime endTime) {
        this.people = people;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}