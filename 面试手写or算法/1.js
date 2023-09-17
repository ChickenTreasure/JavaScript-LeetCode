function recommendSurveyPoints(surveyPosArr, totalDistance) {
    const memo = new Map();

    function dfs(distance) {
        if (distance === 0) {
            return [
                []
            ];
        }

        if (memo.has(distance)) {
            return memo.get(distance);
        }

        let maxLength = 0;
        let longestResults = [];

        for (const posDistance of surveyPosArr) {
            if (posDistance <= distance) {
                const combinations = dfs(distance - posDistance);
                for (const combination of combinations) {
                    const result = [posDistance, ...combination];

                    if (result.length > maxLength) {
                        maxLength = result.length;
                        longestResults = [result];
                    } else if (result.length === maxLength) {
                        longestResults.push(result);
                    }
                }
            }
        }

        memo.set(distance, longestResults);
        return longestResults;
    }

    return dfs(totalDistance);
}

// 测试例子
const surveyPosArr = [10, 1, 2, 7, 6, 1, 5];
const totalDistance = 8;

const recommendedPoints = recommendSurveyPoints(surveyPosArr, totalDistance);
console.log(recommendedPoints);