package com.example.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="Food")
@NoArgsConstructor
@Getter
@Setter
public class Food {


    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column
    String name;
    @Column
    String description;
    @Column
    Float price;
    @Column
    String image;

    @ManyToMany(mappedBy = "reservedFood", fetch = FetchType.LAZY)
    @JsonIgnore
    List<Reservation> reservations;


}
