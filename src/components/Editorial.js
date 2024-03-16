const Editorial = () => {
    const solution = `
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
    `
    return <div>{solution}</div>
}
export default Editorial;