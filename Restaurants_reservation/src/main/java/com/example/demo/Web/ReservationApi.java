package com.example.demo.Web;


import com.example.demo.Service.Interface.FoodService;
import com.example.demo.Service.Interface.ReservationService;
import com.example.demo.Service.Interface.UserService;
import com.example.demo.models.Food;
import com.example.demo.models.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/reservation", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class ReservationApi {

    @Autowired
    ReservationService reservationService;
    @Autowired
    FoodService foodService;
    Reservation existingReservation;
    Reservation createdReservation;
    List<Food> reservedFood = new LinkedList<Food>();
    @PostMapping("/create")
    public Object createReservation(@RequestBody Reservation reservation)
    {
        existingReservation  = null;
        existingReservation = reservationService.findByDayAndTime(reservation.getDay(),reservation.getTime()).orElse(null);
        if (existingReservation==null) {
            reservation.setStatus("created");
            this.reservationService.save(reservation);
            return "CREATED";
        }
        else{
            return "SLOT OCCUPIED";

        }
    }
    @GetMapping("/created")
    public List<Reservation> getAllCreated()
    {
        return this.reservationService.findAll();

    }

}
