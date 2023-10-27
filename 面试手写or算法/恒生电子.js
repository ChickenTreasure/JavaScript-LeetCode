function calculateProbability(n) {
    const minIncrease = 0.01; // 1% 涨幅
    const maxIncrease = 0.05; // 5% 涨幅

    const numPossibilities = Math.floor((maxIncrease - minIncrease) / minIncrease) + 1;
    const probability = Array(numPossibilities).fill(0);

    for (let i = 0; i < numPossibilities; i++) {
        const sum = (i * minIncrease) + minIncrease;
        probability[i] = 1 / numPossibilities;
    }

    return probability;
}

const n = 1;
const resulta = calculateProbability(n);
console.log(resulta);






function reorderSentence(sentence) {
    const words = sentence.split(" ");

    // 对单词数组进行排序
    words.sort((a, b) => {
        // 按照字母长度进行升序排序
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        // 按照 ASCII 码值进行升序排序
        if (a !== b) {
            for (let i = 0; i < a.length; i++) {
                if (a.charCodeAt(i) !== b.charCodeAt(i)) {
                    return a.charCodeAt(i) - b.charCodeAt(i);
                }
            }
        }

        // 如果长度和 ASCII 码值都相同，则按照原词条顺序排序
        return words.indexOf(a) - words.indexOf(b);
    });

    // 将首字母大写
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);

    // 将其他单词转换为小写
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
    }

    // 返回重新排序后的语句
    return words.join(" ");
}

const sentence = "Welcome to join the HundSun family";
const result = reorderSentence(sentence);
console.log(result);