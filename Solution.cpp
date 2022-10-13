
#include <vector>
using namespace std;

class Solution {
    
public:
    bool increasingTriplet(vector<int>& nums) {
        int firstNumber = INT_MAX;
        int secondNumber = INT_MAX;

        for (const auto& current : nums) {
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
};
