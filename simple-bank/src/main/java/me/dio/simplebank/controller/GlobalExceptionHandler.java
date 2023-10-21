package me.dio.simplebank.controller;

import java.util.NoSuchElementException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	private final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class); 
	
	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<String> handleDuplicatedAccount(IllegalArgumentException ex) {
		return new ResponseEntity<String>(ex.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY); 
	}
	
	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<String> handleNotFound(NoSuchElementException ex) {
		return new ResponseEntity<String>("Resource ID not found.", HttpStatus.NOT_FOUND); 
	}
	
	@ExceptionHandler(Throwable.class)
	public ResponseEntity<String> handleUnexpectedException(Throwable ex) {
		String msg = "Unexpected server error.";
		logger.error(msg, ex);
		return new ResponseEntity<String>(msg, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
