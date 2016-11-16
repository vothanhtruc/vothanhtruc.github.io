package RuntimeAbstract;
public class Cat extends AbstractAnimal{
	public void talk() {
		System.out.println("meo");
	}
	public static void main(String[] args) {
		Cat cat = new Cat();
		cat.talk();
	}
}

