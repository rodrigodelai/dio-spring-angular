package me.dio;

public class Iphone {
    private String model;
    private String manufacturer;
    private Integer releaseYear;
    private Float screenSize;
    private String operatingSystem;
    private String camera;
    private Integer storageCapacity;
    private Float price;
    private CurrentApp currentApp = CurrentApp.HOME; 
    private MusicPlayer musicPlayer = new MusicPlayer();
    private Phone phone = new Phone();
    private WebBrowser browser = new WebBrowser();

    public Iphone() {}
    
    public Iphone(String model, String manufacturer, Integer releaseYear, Float screenSize, String operatingSystem,
			String camera, Integer storageCapacity, Float price, CurrentApp currentApp) {
		this.model = model;
		this.manufacturer = manufacturer;
		this.releaseYear = releaseYear;
		this.screenSize = screenSize;
		this.operatingSystem = operatingSystem;
		this.camera = camera;
		this.storageCapacity = storageCapacity;
		this.price = price;
		this.currentApp = currentApp;
	}

	public void accessPhone() {
        System.out.println("Phone App loaded ...");
        currentApp = CurrentApp.PHONE;
        musicPlayer.setActive(false);
        phone.setActive(true);
        browser.setActive(false);
    }

    public void accessMusicPlayer() {
    	System.out.println("Music App loaded ...");
        currentApp = CurrentApp.MUSIC;
        musicPlayer.setActive(true);
        phone.setActive(false);
        browser.setActive(false);
    }

    public void accessWebBrowser() {
    	System.out.println("Web App loaded ...");
        currentApp = CurrentApp.WEB;
        musicPlayer.setActive(false);
        phone.setActive(false);
        browser.setActive(true);
    }
    
    public void accessHomeDisplay() {
    	System.out.println("Home display loaded ...");
        currentApp = CurrentApp.HOME;
        musicPlayer.setActive(false);
        phone.setActive(false);
        browser.setActive(false);
    }
}