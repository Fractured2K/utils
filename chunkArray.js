/**
 * @description Chunk a large array into multiple sub arrays - chunkArray([1, 2, 3, 4], 2) -> [[1, 2], [3, 4]]
 * @param {Array} array - Array
 * @param {Number} chunks - Amount of elements in array
 * @returns [[1, 2], [3, 4]]
 */
function chunkArray(array, chunks) {
  return new Promise((resolve, reject) => {
    // validation
    if (!array) return reject("array is a required argument");
    if (!Array.isArray(array))
      return reject("array agrument must be of type Array");
    if (!chunks) return reject("chunks is a required argument");
    if (typeof chunks !== "number")
      return reject("chunks agrument must be of type Number");

    // handle empty array
    if (!array.length) return resolve([]);

    const chunkedArray = array.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / chunks);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    resolve(chunkedArray);
  });
}

module.exports = chunkArray;

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2));
