package Runtime;

public class BabyCat extends Cat {
	public void talk() {
		System.out.println("chua keu");
	}

	public static void main(String[] args) {
		Animal animal = new BabyCat();
		animal.gioiThieu();
		animal.talk();
	}
}
