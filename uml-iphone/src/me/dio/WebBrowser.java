package me.dio;

public class WebBrowser {
	private boolean isActive;
	
	public void browseWeb(String url) {
		if (isActive)
			System.out.println("Acessing " + url);
		else 
			System.out.println("Web Browser is not active. Please click on 'Acess Web Browser'.");
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

}
