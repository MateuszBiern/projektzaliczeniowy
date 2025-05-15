package com.example.demo.Restaurant.Controllers;

import com.example.demo.Restaurant.Domain.Reservation;
import com.example.demo.Restaurant.Domain.User;
import com.example.demo.Restaurant.Repository.ReservationRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/reservations/history")
@CrossOrigin(origins = "http://localhost:4200")
public class HistoryController {

    private final ReservationRepository reservationRepository;

    public HistoryController(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Reservation>> getAllReservations(@AuthenticationPrincipal User user) {
        System.out.println("Authenticated User ID for History: " + user.getId());
        List<Reservation> upcoming = reservationRepository
                .findByUserAndReservationDateGreaterThanEqualOrderByReservationDateAsc(
                        user, LocalDate.now());
        List<Reservation> past = reservationRepository
                .findByUserAndReservationDateLessThanOrderByReservationDateDesc(
                        user, LocalDate.now());


        past.addAll(upcoming);
        return ResponseEntity.ok(past);
    }
}