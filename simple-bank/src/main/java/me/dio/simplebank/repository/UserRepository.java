package me.dio.simplebank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import me.dio.simplebank.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	public boolean existsByAccountNumber(String account); 
}