public class Score {

	public void sum(double scoreMath, double scoreLiterature) {
		System.out.println((scoreMath + scoreLiterature));
	}

	public void sum(double scoreMath, double scoreLiterature, double scorePhysical) {
		System.out.println((scoreMath + scoreLiterature + scorePhysical));
	}

	public void sum(int scoreMath, int scoreLiterature) {
		System.out.println((scoreMath + scoreLiterature));
	}

	/*
	 * // loi ambiguous public void sum(int scoreMath, long scoreLiterature) {
	 * System.out.println((scoreMath + scoreLiterature)); }
	 * 
	 * public void sum(long scoreMath, int scoreLiterature) {
	 * System.out.println((scoreMath + scoreLiterature)); }
	 */

	/*
	 * // chi thay doi kieu du lieu tra ve khong the overload --> loi compile
	 * time public double sum(double scoreMath, double scoreLiterature) { double
	 * scoreSum = scoreMath + scoreLiterature; System.out.println(scoreSum);
	 * return scoreSum; }
	 */

	public static void main(int demo) {
		Score score = new Score();
		score.sum(5.3, 3.4);
		score.sum(4.5, 3.2, 5.9);
		score.sum(3, 8);

		/*
		 * // loi ambiguous score.sum(10, 7);
		 */
	}

	public static void main(String[] args) {
		System.out.println("Demo overload main");
		main(10);
	}
}
