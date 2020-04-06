package com.example.demo.Service.Interface;

import com.example.demo.models.Administrator;
import com.example.demo.models.User;

import java.util.List;

public interface AdministratorService {

    public  List<String>  getAllEmails();

    List<Administrator> getAll();

    Administrator findByEmail(String email);
}
