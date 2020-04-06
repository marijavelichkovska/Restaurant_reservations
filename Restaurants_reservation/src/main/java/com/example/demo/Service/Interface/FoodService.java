package com.example.demo.Service.Interface;

import com.example.demo.models.Food;

import java.util.List;
import java.util.Optional;

public interface FoodService {

    Food save (Food food);
    Optional<Food> findById(Integer integer);
    List<Food> getAll();
}
