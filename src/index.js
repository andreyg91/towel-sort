// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix && matrix.length > 0) {
        let res = [];
        matrix.forEach((item, i) => {
            if (i % 2 !== 0) {
                item.reverse();
            }
            res.push(item);
        });
        return res.flat();
    }
    return [];
};
