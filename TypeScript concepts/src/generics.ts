//1: a function which is general to types
function convertToArray<T>(input: T): T[] {
  return [input];
}

//arrow function
const convertToArrayArr = <T>(input: T): T[] => {
  return [input];
};

convertToArray(5);
convertToArrayArr(5);

//2: establising relationship between two parameters
function getIndexOfArrayItem<T>(array: T[], arrayItem: T) {
  return array.findIndex(item => item === arrayItem);
}

const arr = [55, 99, 77];
getIndexOfArrayItem(arr, 77);

//arrow function
const getIndexOfArrayItemArr = <T>(array: T[], arrayItem: T) => {
  return array.findIndex(item => item === arrayItem); //findIndex always returns a number
};

const arr2 = [55, 99, 77];
getIndexOfArrayItemArr(arr2, 77);

//3. different param types
function createArrayPair<T, U>(input1: T, input2: U): [T, U] {
  return [input1, input2];
}

createArrayPair('hello', 1);

//to restrict the types of params allowed
//only number or strinf type allowed
function convertToArrayRest<T extends number | string>(input: T): T[] {
  return [input];
}

convertToArrayRest(5);
convertToArrayRest<string>('hello'); //explicitly specifying the type of value allowed
