// 目前存在一批任务，这些任务数据结构如下，任务默认不存在循环依赖。要求实现一个函数，该函数可以计算出一批任务的最长耗时，并给出最长耗时的任务执行顺序

interface Task {
    // 任务id
    id: string;
    // 任务执行耗时
    cost: number;
    // 前置任务id，可选
    dep ? : string;
}

// 实例任务列表
const tasks: Task[] = [
    { id: '1', cost: 100 },
    { id: '2', cost: 100, dep: '4' },
    { id: '4', cost: 100, dep: '3' },
    { id: '3', cost: 100 },
];

// 输出
// 300
// 3 4 2

function TimeCalculate(arr, obj) {
    let allCost = 0;
    let Lcost = obj.cost;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(obj.id)) {
            newArr.push(obj.dep);
            allCost += Lcost;
        } else {
            newArr.push(obj.id);
            allCost += Lcost;
        }
    }
    return newArr;
}




function calculateLongestTime(tasks) {
    // 构建任务图和入度表
    const graph = {}; // 任务图
    const inDegree = {}; // 入度表

    for (const task of tasks) {
        const { id, cost, dep } = task;
        graph[id] = graph[id] || [];
        inDegree[id] = inDegree[id] || 0;
        inDegree[dep] = inDegree[dep] || 0;

        if (dep) {
            graph[dep] = graph[dep] || [];
            graph[dep].push(id);
            inDegree[id]++;
        }

        graph[id].push(cost);
    }

    // 拓扑排序
    const queue = [];
    for (const task in inDegree) {
        if (inDegree[task] === 0) {
            queue.push(task);
        }
    }

    let longestTime = 0;
    const result = [];

    while (queue.length > 0) {
        const currentTask = queue.shift();
        result.push(currentTask);

        if (graph[currentTask]) {
            for (const nextTask of graph[currentTask]) {
                inDegree[nextTask]--;
                if (inDegree[nextTask] === 0) {
                    queue.push(nextTask);
                }
                graph[nextTask][0] += graph[currentTask][0]; // 累加耗时
                longestTime = Math.max(longestTime, graph[nextTask][0]);
            }
        }
    }

    console.log(result.join(' ')); // 输出最长耗时的任务执行顺序
    return longestTime;
}

// 测试
const tasks = [
    { id: '1', cost: 100 },
    { id: '2', cost: 100, dep: '4' },
    { id: '4', cost: 100, dep: '3' },
    { id: '3', cost: 100 },
];

console.log(calculateLongestTime(tasks)); // 输出 300