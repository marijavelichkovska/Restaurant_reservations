package com.example.demo.Service.Interface;

import com.example.demo.models.User;

import java.util.Optional;

public interface UserService {
    User save(User user);

    User findByUsername(String username);
    Optional<User> findById(int id);
}

