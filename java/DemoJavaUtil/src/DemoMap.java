import java.util.*;
import java.util.Map.Entry;

public class DemoMap {
	public static void main(String[] args) {
		Map nameList = new HashMap<>();
		nameList.put("a", "nguyen van sao vang");
		nameList.put("b", "tran thi co bay");
		nameList.put("d", "huynh thi phap phoi");
		nameList.put("e", "nguyen thi lum lon");
		nameList.put("c", "truong thi luu dan");
		System.out.println(nameList);
		Map nameTreeMap = new TreeMap<>();
		nameTreeMap.putAll(nameList);
		System.out.println("Mang da sap xep: " + nameTreeMap);
		Set set = nameList.entrySet();
		Iterator interator = set.iterator();
		Map.Entry me = null;
		int index = 6;
		if (index <= (set.size())) {
			for (int i = 0; i < index; i++) {
				me = (Map.Entry) interator.next();
			}
			System.out.println("Phan tu thu " + index + " trong mang: " + me.getKey() + ": " + me.getValue());
		} else {
			System.out.println(index + " lon hon so phan tu trong mang");
		}

	}
}
