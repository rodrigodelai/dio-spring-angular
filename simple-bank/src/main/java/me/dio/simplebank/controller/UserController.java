package me.dio.simplebank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.dio.simplebank.model.User;
import me.dio.simplebank.service.UserService;

@RestController
@RequestMapping(value = "/user")
public class UserController {

	@Autowired
	private UserService service;
	
	@GetMapping(value = "/{id}")
	public User findById(@PathVariable Long id) {
		return service.findById(id);
	}
	
	@PostMapping
	public User create(@RequestBody User newUser) {
		return service.create(newUser);
	}
	
}
