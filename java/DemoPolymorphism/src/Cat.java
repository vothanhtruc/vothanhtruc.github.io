public class Cat extends Animal{
	@Override
	public void talk() {
		System.out.println("meo");
	}
	public static void main(String[] args) {
		Cat cat = new Cat();
		cat.talk();
	}
}

