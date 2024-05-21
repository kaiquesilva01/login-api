package com.systemweb.loginapi.dto;

import com.systemweb.loginapi.entities.User;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String password;

    UserDTO() {}

    public UserDTO(Long id, String name, String email, String phone, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    public UserDTO(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.phone = user.getPhone();
        this.password = user.getPassword();
    }

}
