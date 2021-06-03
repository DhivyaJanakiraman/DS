var highFive = function(items) {
    let scoresMap = {};
    let studIds;
    let result = [];

    for(let i=0; i<items.length; i++){
        let student = items[i];
        if(scoresMap[student[0]]){
            scoresMap[student[0]].push(student[1])
        }else {
          scoresMap[student[0]] = [student[1]];   
        }
    }
   
    for(let studId in scoresMap){
      scoresMap[studId] = calculateAverage(scoresMap[studId]);
      result.push([studId,scoresMap[studId]])
    }
    return result;
};

var calculateAverage = function(arr){
  let sum = 0;
  arr = arr.sort((a,b)=>b-a);
  for(let i=0; i<5; i++){
    sum += arr[i] || 0;
  }
  return Math.floor(sum/5);
}
