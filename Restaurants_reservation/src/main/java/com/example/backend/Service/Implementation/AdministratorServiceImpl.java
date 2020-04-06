package com.example.backend.Service.Implementation;

import com.example.backend.Repository.AdministratorRepository;
import com.example.backend.Service.Interface.AdministratorService;
import com.example.backend.models.Administrator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdministratorServiceImpl implements AdministratorService {

    @Autowired
    AdministratorRepository administratorRepository;

    @Override
    public List<String> getAllEmails() {
        return this.administratorRepository.getAllEmails();
    }

    @Override
    public List<Administrator> getAll() {
        return this.administratorRepository.findAll();
    }

    @Override
    public Administrator findByEmail(String email) {
        return this.administratorRepository.findByEmail(email);
    }
}
