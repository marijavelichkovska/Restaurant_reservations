package com.example.backend.Repository;

import com.example.backend.models.Food;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FoodRepository extends JpaRepository<Food,Integer> {

    Optional<Food> findById(Integer integer);
}
