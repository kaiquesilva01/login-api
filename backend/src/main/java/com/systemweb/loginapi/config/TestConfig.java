package com.systemweb.loginapi.config;

import com.systemweb.loginapi.entities.User;
import com.systemweb.loginapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.List;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;
    @Override
    public void run(String... args) throws Exception {
        User u1 = new User();
        u1.setName("Maria Teste");
        u1.setEmail("maria@gmail.cm");
        u1.setPhone("11999988888");
        u1.setPassword("12345abcde");
        userRepository.saveAll(List.of(u1));
    }
}
