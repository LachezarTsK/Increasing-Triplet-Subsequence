
public class Solution {

    public boolean increasingTriplet(int[] nums) {
        int firstNumber = Integer.MAX_VALUE;
        int secondNumber = Integer.MAX_VALUE;

        for (int current : nums) {
            if (firstNumber >= current) {
                firstNumber = current;
            } else if (secondNumber >= current) {
                secondNumber = current;
            } else {
                return true;
            }
        }
        return false;
    }
}
