package com.example.backend.Service.Interface;

import com.example.backend.models.Reservation;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ReservationService {

    Reservation save(Reservation reservation);
   Optional<Reservation> findByDayAndTime(String day, String time);
   Optional<Reservation>findById(Long id);
   List<Reservation> findAll();
}
