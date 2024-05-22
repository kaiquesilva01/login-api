package com.systemweb.loginapi.repositories;

import com.systemweb.loginapi.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
