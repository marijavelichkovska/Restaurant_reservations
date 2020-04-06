package com.example.demo.Service.Interface;

import com.example.demo.models.Reservation;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ReservationService {

    Reservation save(Reservation reservation);
   Optional<Reservation> findByDayAndTime(String day, String time);
   Optional<Reservation>findById(Long id);
   List<Reservation> findAll();
}
