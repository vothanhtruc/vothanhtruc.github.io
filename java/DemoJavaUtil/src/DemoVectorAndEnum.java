import java.util.*;

public class DemoVectorAndEnum {
	public static void main(String[] args) {
		Vector vector = new Vector(3, 2);
		vector.addElement("a");
		vector.addElement("c");
		vector.addElement("e");
		System.out.println("Capacity1: " + vector.capacity());
		vector.addElement("b");
		System.out.println("Capacity2: " + vector.capacity());
		vector.addElement("d");
		System.out.println("Capacity3: " + vector.capacity());
		vector.addElement("f");
		System.out.println("Phan tu dau tien: " + vector.firstElement());
		System.out.println("Phan tu cuoi cung: " + vector.lastElement());
		Enumeration vEnum = vector.elements();
		System.out.print("Cac phan tu trong Vector: ");
		while (vEnum.hasMoreElements())
			System.out.print(vEnum.nextElement() + " ");
		System.out.println();
	}
}
