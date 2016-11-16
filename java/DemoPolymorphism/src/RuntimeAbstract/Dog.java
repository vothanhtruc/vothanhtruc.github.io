package RuntimeAbstract;
public class Dog extends AbstractAnimal{
	public void talk() {
		System.out.println("gâu");
	}
	public static void main(String[] args) {
		Dog dog = new Dog();
		dog.talk();
	}
}
