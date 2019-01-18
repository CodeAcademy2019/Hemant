#include <iostream>
#include <vector>
using namespace std;

vector<int> res;
int final_max_profit;

int maxProfit(vector<int> vec)
{
    int max_profit = vec[0];
    for(int i = 0;i < vec.size(); i++) {
        if(max_profit+vec[i] > max_profit) {
            max_profit = max_profit+vec[i];
            res.clear();
            res.push_back(i);
        } else if(max_profit+vec[i]  == max_profit){
            res.push_back(i);
        }
    }
    return max_profit;
}

int findNumMaxProfit(vector<int> vec) {

}

int main() {
    int t;
    while(1) {
        vector<vector<int>> stacks;
        cin>>t;
        if(t == 0) exit(0);
        for(int i = 0;i < t;i++) {
            int numBoxes;
            cin >> numBoxes;
            for(int j = 0; j < numBoxes; j++) {
                cin >> stacks[i][j];
                stacks[i][j] -= 10;
            }
        }
        final_max_profit = stacks[0][0];
        for(int i = 0;i < stacks.size(); i++) {
            final_max_profit = max(final_max_profit, final_max_profit+maxProfit(stacks[i]));
        }
        cout << final_max_profit << endl;
    }

}