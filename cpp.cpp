#include<bits/stdc++.h>
using namespace std;



int main()
{
    cout<<"Bismillah"<<endl;
    
    vector<vector<int>> ans;
    int n=points.size();
    sort(points.begin(),points.end());
    vector<int> cur=points[0];
    for (int i = 1; i < n; i++)
    {
        if(cur[1]>=points[i][0]){
            cur[1]=points[i][1];
        }
        else{
            ans.push_back(cur);
            cur=points[i];
        }
    }
    return ans;

    cout<<endl<<"Alhamdulillah";
return 0;
}