package CompileTime;
public class Cat extends Animal{
	public void talk() {
		System.out.println("meo");
	}
	public static void main(String[] args) {
		Cat cat = new Cat();
		cat.talk();
	}
}

