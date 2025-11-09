/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let steps=0
    let isRuns=true
    if(num1!=0 && num2!=0)
    {
      while(isRuns)
    {
        if(num1>=num2)
        {  
            num1=num1-num2
            steps+=1
        }
        else if(num1===0 || num2==0)
        {
            isRuns=false;
            break;
        }
        else
        {
            num2=num2-num1
            steps+=1
        }
    }
    return steps
    }
    return steps
};

let count=countOperations(2,3)
console.log("steps required for making one number num1 or num2   equal to zero ",count);
