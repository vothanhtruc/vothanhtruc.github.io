
public class Name {
	public void showName(String name) {
		System.out.println(this.standardized(name));
	}

	public String standardized(String name) {
		String trimName = name.trim();
		return trimName;
	}
}
