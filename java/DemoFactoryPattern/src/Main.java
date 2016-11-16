
public class Main {
	public static void main(String[] args) {
		System.out.println("Gioi han do tuoi choi:");
		System.out.print("Bup be: ");
		Producer producer = new DollProducer();
		producer.intro();

		System.out.print("Co: ");
		producer = new ChessProducer();
		producer.intro();
	}
}


