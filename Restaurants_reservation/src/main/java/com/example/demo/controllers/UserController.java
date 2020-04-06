//package com.example.demo.controllers;
//import com.example.demo.Service.Interface.UserService;
//import com.example.demo.models.Role;
//import com.example.demo.models.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import org.springframework.beans.factory.annotation.Value;
//
//import org.springframework.core.env.Environment;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//
//import java.security.Principal;
//import java.util.List;
//
//@RestController
//public class UserController {
//
//    @Autowired
//    private UserService userService;
//
//
//
//    @Autowired
//    private Environment env;
//
//    @Value("${spring.application.name:demoservice}")
//    private String serviceId;
//
//    @GetMapping("/service/port")
//    public String getPort(){
//        return "Service port number : " + env.getProperty("local.server.port");
//    }
//
//
//
//    @PostMapping("/service/registration")
//    public ResponseEntity<?> saveUser(@RequestBody User user){
//        if(userService.findByUsername(user.getUsername()) != null){
//            //Status Code: 409
//            return new ResponseEntity<>(HttpStatus.CONFLICT);
//        }
//        //Default role = user
//        user.setRole(Role.USER);
//        return new ResponseEntity<>(userService.save(user), HttpStatus.CREATED);
//    }
//
//    @GetMapping("/service/login")
//    public ResponseEntity<?> getUser(Principal principal){
//        //Principal principal = request.getUserPrincipal();
//        if(principal == null || principal.getName() == null){
//            //This means; logout will be successful. login?logout
//            return new ResponseEntity<>(HttpStatus.OK);
//        }
//        //username = principal.getName()
//        return ResponseEntity.ok(userService.findByUsername(principal.getName()));
//    }
//
//    @PostMapping("/service/names")
//    public ResponseEntity<?> getNamesOfUsers(@RequestBody List<Long> idList){
//        return ResponseEntity.ok(userService.findUsers(idList));
//    }
//
//    @GetMapping("/service/test")
//    public ResponseEntity<?> test(){
//        return ResponseEntity.ok("It is working...");
//    }
//}