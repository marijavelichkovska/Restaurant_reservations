package com.example.backend.Service.Interface;

import com.example.backend.models.Food;

import java.util.List;
import java.util.Optional;

public interface FoodService {

    Food save (Food food);
    Optional<Food> findById(Integer integer);
    List<Food> getAll();
}
