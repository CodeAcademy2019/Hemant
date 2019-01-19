#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> key; //= {{3}, {4,5}, {1,4}};

void comb(vector<vector<int>>& res, vector<int> tmp, int idx)
{
    if(idx >= key.size()) {
        res.push_back(tmp);
        return;
    }
    vector<int> l = key[idx];
    for(int i = 0; i < l.size(); i++) {
        tmp.push_back(l[i]);
        comb(res, tmp, idx+1);
        tmp.pop_back();
    }
}

vector<vector<int>> combinations() {
    vector<vector<int>> v;
    vector<int> tmp;
    comb(v, tmp, 0);
    return v;
}

int max_sum(const vector<int> &stack, vector<int>& idx) {
    int sum = 0;
    int i = 1;
    int maxx = INT_MIN;
    for (int j : stack) {
        sum += j;
        if(maxx < sum) {
            maxx = sum;
            idx.clear();
            idx.push_back(i);
        } else if(maxx == sum) {
            idx.push_back(i);
        }
        i++;
    }

    return maxx;
}

int main() {
    int t;
    cin>>t;
    while(t--) {
        int num_stacks;
        cin>>num_stacks;
        vector<vector<int>> stacks(num_stacks);

        for(int i = 0;i < num_stacks;i++) {
            int numBoxes;
            cin >> numBoxes;
            stacks[i].resize(numBoxes);
            for(int j = 0; j < numBoxes; j++) {
                cin >> stacks[i][j];
                stacks[i][j] = 10 - stacks[i][j];
            }
        }

        vector<pair<int,vector<int>>> results;
        int max_profit = 0;
        for(int i = 0; i < stacks.size(); i++) {
            vector<int> idx;
            int res = max_sum(stacks[i], idx);
            if(res >= 0) {
                max_profit += res;
                key.push_back(idx);
            }
        }
        vector<vector<int>> possible_answers = combinations();
        vector<int> answer_sum;

        for(const auto &vec : possible_answers) {
            int sum = 0;
            for(auto val : vec) {
                sum += val;
            }
            answer_sum.push_back(sum);
        }

        sort(begin(answer_sum), end(answer_sum));
        cout << max_profit << endl;

        for(int i : answer_sum) {
            cout << i << " ";
        }

    }
}