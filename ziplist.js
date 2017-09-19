let testl = ['a', 'b', 'c'];
let testl2 = [1, 2, 3];

function zipList (list1, list2){
  let resultList = [];
  for (let i = 0; i <list1.length; i++){
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}
console.log(zipList(testl, testl2));

function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(testl, testl2));