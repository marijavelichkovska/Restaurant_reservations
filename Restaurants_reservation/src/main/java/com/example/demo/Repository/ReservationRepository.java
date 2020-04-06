package com.example.demo.Repository;

import com.example.demo.models.Reservation;
import com.example.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


public interface ReservationRepository  extends JpaRepository<Reservation, Long> {

    Optional<Reservation> findByDayAndTime(String day, String time);
    @Query("select c from Reservation c where c.status like 'created'")
    List<Reservation> findAllReservations();
}
