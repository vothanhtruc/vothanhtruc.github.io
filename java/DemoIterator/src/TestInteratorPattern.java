
public class TestInteratorPattern {
	public static void main(String[] args) {
		ListStudentImpl studentList = new ListStudentImpl();
		for (Interator interator = studentList.getInterator(); interator.hasNext();) {
			System.out.println(interator.next());
		}
	}
}
