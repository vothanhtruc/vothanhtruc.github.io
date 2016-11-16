import java.util.*;

public class DemoArrayList {
	public static void main(String[] args) {
		List arrayList = new ArrayList<>();
		arrayList.add("1");
		arrayList.add("4");
		arrayList.add("5");
		arrayList.add(2, "2");
		System.out.println("ArrayList: " + arrayList);
		System.out.println("So phan tu: " + arrayList.size());
		System.out.println("Chua phan tu 2: " + arrayList.contains("2"));
		System.out.println("Lay phan tu dung thu 3: " + arrayList.get(3));
		System.out.println("Phan tu 4 dung thu: " + arrayList.indexOf("4"));
		arrayList.remove(2);
		System.out.println("Xoa phan tu thu 2 mang con: " + arrayList);
		arrayList.set(0, "10");
		System.out.println("Thay phan tu dau thanh 10: " + arrayList);
		arrayList.clear();
		System.out.println("Xoa mang: " + arrayList);
	}
}
