package me.dio;

import java.util.Scanner;

public class Counter {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter the first parameter: ");
		int start = sc.nextInt();
		
		System.out.print("Enter the second parameter: ");
		int end = sc.nextInt();
		
		try {
			count(start, end);
		} 
		catch (InvalidParametersException e) {
			System.out.println(e.getMessage());
		}
		finally {
			System.out.println("End of program.");
		}
		
		sc.close();
	}
	
	public static void count(int start, int end) throws InvalidParametersException {
		int limit = end - start;
		
		if (limit < 0)
			throw new InvalidParametersException();
		
		for (int i = 0; i < limit; i++) {
			System.out.println("Printing number " + (i + 1));
		}
	}

}
