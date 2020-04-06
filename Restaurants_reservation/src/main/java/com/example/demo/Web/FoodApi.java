package com.example.demo.Web;


import com.example.demo.Service.Implementation.FoodServiceImpl;
import com.example.demo.models.Food;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.PastOrPresent;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/food", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class FoodApi {

    FoodServiceImpl foodService;

    public FoodApi(FoodServiceImpl foodService) {
        this.foodService = foodService;
    }
    @PostMapping
    public void saveFood(@RequestBody Food food)
    {
        this.foodService.save(food);
    }
    @GetMapping
    public List<Food> getAllFood()
    {
        return this.foodService.getAll();
    }
    @GetMapping(path = "/getByID")
    public Food getById(int id)
    {
        return this.foodService.findById(id).orElse(null);
    }


}
