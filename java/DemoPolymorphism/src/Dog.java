public class Dog extends Animal{
	@Override
	public void talk() {
		System.out.println("g�u");
	}
	public static void main(String[] args) {
		Dog dog = new Dog();
		dog.talk();
	}
}
