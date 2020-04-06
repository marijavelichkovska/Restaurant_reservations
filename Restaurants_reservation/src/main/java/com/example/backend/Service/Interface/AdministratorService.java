package com.example.backend.Service.Interface;

import com.example.backend.models.Administrator;

import java.util.List;

public interface AdministratorService {

    public  List<String>  getAllEmails();

    List<Administrator> getAll();

    Administrator findByEmail(String email);
}
