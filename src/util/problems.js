const problems = [
    {
        probId: 101,
        probName: "House Robber",
        probStat: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

        Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.`,
        testcases: [
            {
                size: "3\n",
                nums: "1\n2\n3\n",
            },
            {
                size: "5\n",
                nums: "2\n7\n9\n3\n1\n",
            }
        ],
        output: ["4", "12"],
        correctCode:`
        #include <bits/stdc++.h>
        using namespace std;
        
        int houseRobber(vector<int>& nums) { 
          vector<int> dp (nums.size()+1);
          dp[1] = nums[0]; 
          for (int i = 1; i<nums.size(); i++){ 
                int ans1 = nums[i] + dp[i-1]; 
                int ans2 = dp[i]; 
                dp[i+1] = max (ans1,ans2); 
           } 
         
        
           return dp[nums.size ()]; 
        }
        
        int main (){
            int n;
            cin >> n;
            
            vector<int> arr(n);
            for (auto &x: arr) cin >> x;
            cout << to_string (houseRobber(arr));
        }` ,
        boilerPlate: `
#include <bits/stdc++.h>
using namespace std;

int houseRobber (vector<int> &arr){
          
}

int main (){
    int n;
    cin >> n;
    
    vector<int> arr(n);
    for (auto &x: arr) cin >> x;
    cout << to_string (houseRobber(arr));
}`
    },
    
]

export default problems;