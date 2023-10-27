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