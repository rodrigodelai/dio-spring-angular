package me.dio;

public class InvalidParametersException extends RuntimeException {
	
	public InvalidParametersException() {
		super("The first parameter should not be greater than the second.");
	}
}
