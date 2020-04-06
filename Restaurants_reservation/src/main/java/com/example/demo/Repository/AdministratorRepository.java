package com.example.demo.Repository;

import com.example.demo.models.Administrator;
import com.example.demo.models.Food;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AdministratorRepository extends JpaRepository<Administrator,Integer> {

    @Query("select a.email from Administrator a")
    List<String> getAllEmails();

    @Query("select admin from Administrator admin where admin.email = :email")
    Administrator findByEmail(String email);
}
