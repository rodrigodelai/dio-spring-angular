package me.dio;

public class MusicPlayer {
	private String playingNow;
	private boolean isActive; 
	
	public void select(String musicName) {
		if (isActive) {
			System.out.println("Select " + musicName);
			playingNow = musicName;
		}
		else {
			System.out.println("Music Player is not active. Please click on 'Acess Music Player'.");
		}
	}
	
	public void play() {
		if (isActive) {
			System.out.println("Playing " + playingNow);
		}
		else {
			System.out.println("Music Player is not active. Please click on 'Acess Music Player'.");
		}	
	}
	
	public void pause() {
		if (isActive)
			System.out.println("Music paused.");
		else
			System.out.println("Music Player is not active. Please click on 'Acess Music Player'.");
	}
	
	public void next() {
		if (isActive) {
			System.out.println("Playing next song");
			playingNow = "Unknown";
		}
		else {
			System.out.println("Music Player is not active. Please click on 'Acess Music Player'.");
		}
	}
	
	public void previous() {
		if (isActive) {
			System.out.println("Playing previous song");
			playingNow = "Unknown";
		}
		else {
			System.out.println("Music Player is not active. Please click on 'Acess Music Player'.");
		}
	}

	public String getPlayingNow() {
		return playingNow;
	}

	public void setPlayingNow(String playingNow) {
		this.playingNow = playingNow;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}	
	
}
