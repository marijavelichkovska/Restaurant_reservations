package com.example.backend.Service.Interface;

import com.example.backend.models.User;

import java.util.Optional;

public interface UserService {
    User save(User user);

    User findByUsername(String username);
    Optional<User> findById(int id);
}

