package Runtime;

public class Cat extends Animal {
	String noiSong = "trong nha";

	public void gioiThieu() {
		System.out.println("meo");
	}

	public void talk() {
		System.out.println("meo meo");
	}

	public static void main(String[] args) {
		Animal animal = new Cat(); // upscasting
		animal.gioiThieu();
		System.out.println(animal.noiSong);
	}
}
