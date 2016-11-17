import java.util.*;

public class DemoSet {
	public static void main(String[] args) {
		Set demoSet = new HashSet<>();
		SortedSet demoSortSet = new TreeSet<>();
		demoSet.add("A");
		demoSet.add("D");
		demoSet.add("Z");
		demoSet.add("C");
		demoSortSet.addAll(demoSet);
		System.out.println("Mang set:" + demoSet);
		System.out.println("Mang sortset: " + demoSortSet);
		System.out.println("Mang chua phan tu F: " + demoSet.contains("F"));
		System.out.println("Mang rong: " + demoSet.isEmpty());
		System.out.println("So phan tu mang: " + demoSet.size());
		demoSet.clear();
		System.out.println("Xoa mang: " + demoSet);
	}
}
