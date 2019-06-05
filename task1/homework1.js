function difference(arr, itemsToExclude) {
  return arr.filter(item => !itemsToExclude.includes(item))
}
difference([2, 1, 5], [2, 3]);


function groupBy(array, value) {
  return array.reduce((obj, element) => {
    const index = element[value];
    index in obj ? obj[index].push(element) : obj[index] = [element];
    return obj;
  }, {})
}
groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'gender');



function flatten(array) {
  return array.reduce((prevElement, nextElement) => prevElement.concat(nextElement), [])
}
flatten([1, [2, [3, [4]], 5]]);
flatten([1, 2, 3, 4, 5]);
flatten([1, [2, 3], 4, 5]);



function uniq(array) {
  return array.filter((item, i, array) => array.indexOf(item) == i)
}
uniq([2, 1, 2]);



function chunk(array, size) {
  const newArray = [];
    while(array.length) newArray.push(array.splice(0,size));
  return newArray;
}

chunk(['a', 'b', 'c', 'd'], 2);
chunk(['a', 'b', 'c', 'd'], 3);
