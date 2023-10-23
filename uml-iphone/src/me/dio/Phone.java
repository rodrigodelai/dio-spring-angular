package me.dio;

public class Phone {
	private boolean isActive;
	
	public void makeCall(String number) {
		if (isActive)
			System.out.println("Calling " + number);
		else 
			System.out.println("Phone is not active. Please click on 'Acess Phone'.");
	}
	
	public void sendMessage(String message, String number) {
		if (isActive)
			System.out.println("Sending message to " + number);
		else 
			System.out.println("Phone is not active. Please click on 'Acess Phone'.");
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
	
}
