package com.systemweb.loginapi.services;

import com.systemweb.loginapi.dto.UserDTO;
import com.systemweb.loginapi.entities.User;
import com.systemweb.loginapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional
    public UserDTO insert(UserDTO dto) {
        User entity = new User();
        copyDtoToEntity(dto,entity);
        repository.save(entity);
        return new UserDTO(entity);
    }








    private void copyDtoToEntity(UserDTO dto , User entity) {
        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setPhone(dto.getPhone());
    }
}
