package com.example.backend.Service.Implementation;

import com.example.backend.Repository.ReservationRepository;
import com.example.backend.Service.Interface.ReservationService;
import com.example.backend.models.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    @Override
    public Reservation save(Reservation reservation) {
       return this.reservationRepository.save(reservation);
    }

    @Override
    public Optional<Reservation> findByDayAndTime(String day, String time) {
        return reservationRepository.findByDayAndTime(day, time);
    }

    @Override
    public Optional<Reservation> findById(Long id) {
        return this.reservationRepository.findById(id);
    }

    @Override
    public List<Reservation> findAll() {
        return this.reservationRepository.findAllReservations();
    }


}