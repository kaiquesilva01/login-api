package com.systemweb.loginapi.services;

import com.systemweb.loginapi.dto.UserDTO;
import com.systemweb.loginapi.entities.User;
import com.systemweb.loginapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<UserDTO> findAll() {
        var list = repository.findAll();
        return list.stream().map(UserDTO::new).collect(Collectors.toList());
    }
    public UserDTO insert(User obj) {
        repository.save(obj);
        var entity = new UserDTO(obj);
        return entity;
    }
}
