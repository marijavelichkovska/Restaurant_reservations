package com.example.demo.Service.Implementation;

import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.Interface.UserService;
import com.example.demo.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
      @Autowired
    private UserRepository userRepository;

    @Override
    public User save(User user){

        return userRepository.save(user);
    }

    @Override
    public User findByUsername(String username){
        return userRepository.findByUsername(username).orElse(null);
    }

    @Override
    public Optional<User> findById(int id) {
        return this.userRepository.findByIdUser((long) id);
    }


}