package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Data
@Setter
@Getter
@AllArgsConstructor
@Table(name = "reservation")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@JsonAutoDetect(getterVisibility=JsonAutoDetect.Visibility.PUBLIC_ONLY)
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long idRes;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="id")

    private User user;
    @Column
    private String day;
    @Column
    private String time;
    @Column
    private String status; // created, approved

    @Column
    private int numberPeople;

    @ManyToMany
    private List<Food> reservedFood;
}
