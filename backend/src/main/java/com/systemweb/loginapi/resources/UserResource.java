package com.systemweb.loginapi.resources;

import com.systemweb.loginapi.dto.UserDTO;
import com.systemweb.loginapi.entities.User;
import com.systemweb.loginapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserResource {

    @Autowired
    private UserService service;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<UserDTO>> findAll() {
        List<UserDTO> list = service.findAll();
        return ResponseEntity.ok(list);
    }
}
