![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Nob2NvbGF0ZTE5OTkvY2RuL2ltZy8yMDIwMDgyODE0NTUyMS5qcGc?x-oss-process=image/format,png)
>仰望星空的人，不应该被嘲笑

## 题目描述
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

![](https://img-blog.csdnimg.cn/20201006163352438.png#pic_center)


网格中的障碍物和空位置分别用 1 和 0 来表示。

说明：m 和 n 的值均不超过 100。

示例 1:

```javascript
输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: 2
解释:
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


## 解题思路

机器人每次只能向下或者向右移动一步。按照原本思路，我们图中某一个点的路径数等于左边点的路径数和上边点的路径数总和。

现在有了障碍物，对于障碍物点，我们需要将路径数设置为0，因为它没办法给其它点提供路径数，走不通。

此外，我们需要注意，当第0行和第0列有一个地方出现了障碍，那么当前这个点的路径数和后续的路径数都设置为0。

其次，我们也需要考虑一下，如果起点就是一个障碍物点，那么路径数本就为0。


```javascript
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] == 1) return 0; // 出发点被堵住，直接返回0
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
    }
    dp[0][0] = 1; // 起点路径数设置为1
    for (let i = 1; i < m; i++) {
        // 如果第0列有一个地方出现了障碍，那么当前这个点的路径数和后续的路径数都设置为0
        dp[i][0] = (obstacleGrid[i][0] == 1 || dp[i - 1][0] == 0) ? 0 : 1;
    }
    for (let i = 1; i < n; i++) {
        // 如果第0行有一个地方出现了障碍，那么当前这个点的路径数和后续的路径数都设置为0
        dp[0][i] = (obstacleGrid[0][i] == 1 || dp[0][i - 1] == 0) ? 0 : 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // 如果当前这个点是障碍物，路径数为0，也不会给其它点提供相应的路径数
            dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
```



## 最后
文章产出不易，还望各位小伙伴们支持一波！

往期精选：

<a href="https://github.com/Chocolate1999/Front-end-learning-to-organize-notes">小狮子前端の笔记仓库</a>

<a href="https://github.com/Chocolate1999/leetcode-javascript">leetcode-javascript：LeetCode 力扣的 JavaScript 解题仓库，前端刷题路线（思维导图）</a>

小伙伴们可以在Issues中提交自己的解题代码，🤝 欢迎Contributing，可打卡刷题，Give a ⭐️ if this project helped you!


<a href="https://yangchaoyi.vip/">访问超逸の博客</a>，方便小伙伴阅读玩耍~

![](https://img-blog.csdnimg.cn/2020090211491121.png#pic_center)

```javascript
学如逆水行舟，不进则退
```


