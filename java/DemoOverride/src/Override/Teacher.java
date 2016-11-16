package Override;

public class Teacher extends Person {
	public void intro() {
		System.out.println("teacher");
	}

	public static void main(String[] args) {
		Teacher teacher = new Teacher();
		teacher.intro();
	}
}
