
public class ListStudentImpl implements Container {
	private String[] studentList = { "nguyen van a", "tran van b", "luong van c" };

	@Override
	public Interator getInterator() {
		return new Interator() {
			private int index;

			@Override
			public Object next() {
				if (hasNext()) {
					return studentList[index++];
				}
				return null;
			}

			@Override
			public boolean hasNext() {
				if (index < studentList.length) {
					return true;
				} else {
					return false;
				}
			}
		};
	}
}
