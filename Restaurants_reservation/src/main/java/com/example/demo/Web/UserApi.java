package com.example.demo.Web;


import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.Interface.UserService;
import com.example.demo.models.Administrator;
import com.example.demo.models.Login;
import com.example.demo.models.User;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/user", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class UserApi {

    private UserService userService;
    public UserApi(UserService userService)
    {
        this.userService = userService;
    }
    @PostMapping("/register")
    User registerUser (@RequestBody User user)
    {

        User userWithSameUsername = userService.findByUsername(user.getUsername());
        if (userWithSameUsername==null ) {
            userService.save(user);
            return user;
        }
        else
            return null;

    }


    @PostMapping("/login")
    public Object loginUser(@RequestBody  Login login)
    {

         String username = login.getUsername();
         User user = this.userService.findByUsername(login.getUsername());
         if( user !=null && user.getPassword().equals(login.getPassword()))
            return user;
         else{
             return null;
         }
    }

    @GetMapping(path = "getuser/{id}")
    public User getLoggedInUser(@PathVariable (name = "id") int idUser)
    {
        return this.userService.findById(idUser).orElse(null);
    }
}
