
public class ListNameImpl implements IListName {
	private Name name;

	public ListNameImpl(Name name) {
		this.name = name;
	}

	@Override
	public void showListName(String[] nameList) {
		for (String nameItem : nameList) {
			name.showName(nameItem);
		}
	}
}
