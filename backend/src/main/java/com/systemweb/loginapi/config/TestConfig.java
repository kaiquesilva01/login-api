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
        u1.setEmail("maria@gmail.com");
        u1.setPhone("11999988888");
        u1.setPassword("12345abcde");
        userRepository.saveAll(List.of(u1));

        User u2 = new User();
        u2.setName("Joao Barros");
        u2.setEmail("joao@gmail.com");
        u2.setPhone("1198478321");
        u2.setPassword("12345abcde");
        userRepository.saveAll(List.of(u1));
    }


}
