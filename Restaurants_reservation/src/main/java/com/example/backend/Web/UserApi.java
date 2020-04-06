package com.example.backend.Web;


import com.example.backend.Service.Interface.UserService;
import com.example.backend.models.LoginUser;
import com.example.backend.models.User;
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
    public Object loginUser(@RequestBody LoginUser login)
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
