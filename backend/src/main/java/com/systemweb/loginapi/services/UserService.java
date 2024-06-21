package com.systemweb.loginapi.services;

import com.systemweb.loginapi.dto.UserDTO;
import com.systemweb.loginapi.entities.User;
import com.systemweb.loginapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<UserDTO> findAll() {
        var list = repository.findAll();
        return list.stream().map(UserDTO::new).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public UserDTO findById(Long id) {
        Optional<User> obj = repository.findById(id);
        User entity = obj.orElseThrow(() -> new RuntimeException("Not found"));
        return new UserDTO(entity);
    }

    @Transactional
    public UserDTO insert(UserDTO dto) {
        User entity = new User();
        copyDtoToEntity(dto,entity);
        repository.save(entity);
        return new UserDTO(entity);
    }

    @Transactional
    public void delete(Long id) {
        if(!repository.existsById(id)) {
            throw new RuntimeException("Não encontrado");
        }
        try {
            repository.deleteById(id);
        }
        catch (DataIntegrityViolationException e) {
                throw new RuntimeException();
        }
    }


    private void copyDtoToEntity(UserDTO dto , User entity) {
        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setPhone(dto.getPhone());
    }
}
