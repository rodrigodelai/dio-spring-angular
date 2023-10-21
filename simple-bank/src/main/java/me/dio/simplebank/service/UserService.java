package me.dio.simplebank.service;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.dio.simplebank.model.User;
import me.dio.simplebank.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public User findById(Long id) {
		return repository.findById(id).orElseThrow(NoSuchElementException::new);
	}
	
	public User create(User newUser) {
		if (repository.existsByAccountNumber(newUser.getAccount().getNumber()))
			throw new IllegalArgumentException("Account number already exists");
		
		return repository.save(newUser);
	}
	
}
