
public class DollProducer extends Producer {
	@Override
	public Toy getToy() {
		return new Doll();
	}
}


