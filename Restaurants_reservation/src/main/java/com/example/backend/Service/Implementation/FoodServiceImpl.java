package com.example.backend.Service.Implementation;

import com.example.backend.Repository.FoodRepository;
import com.example.backend.Service.Interface.FoodService;
import com.example.backend.models.Food;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodServiceImpl implements FoodService {


    @Autowired
    FoodRepository foodRepository;


    @Override
    public Food save(Food food) {
        return foodRepository.save(food);
        }

    @Override
    public Optional<Food> findById(Integer integer) {
        return foodRepository.findById(integer);
    }

    @Override
    public List<Food> getAll() {
        return this.foodRepository.findAll();
    }
}
