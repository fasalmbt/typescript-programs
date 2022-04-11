const matrixAddition = (matrix1: number[][], matrix2: number[][]) => {
    const result = [];
    for (let i =0; i < matrix1.length; i++){
        result.push([]);
        for (let j = 0; j< matrix1[i].length; j++){
            result[i].push(matrix1[i][j]+matrix2[i][j]);
        }
    }
    console.log(result);
}

let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
let matrix2 = [[1,2,3],[4,5,6],[7,8,9]];
matrixAddition(matrix1, matrix2);