package com.example.demo.Service.Implementation;

import com.example.demo.Repository.FoodRepository;
import com.example.demo.Service.Interface.FoodService;
import com.example.demo.models.Food;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
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
