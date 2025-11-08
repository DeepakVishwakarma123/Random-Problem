/**
 * @param {number} n
 * @return {number}
 */ 


var minimumOneBitOperations = function(n) {
  let binaryNum=BinaryConvert(n)
  console.log("the binary num is",binaryNum);
  
  let totalSteps=makeANumberZero(binaryNum,false)
  console.log("The Total Steps is",totalSteps)
};


let isnotQuotientOne=true
function BinaryConvert(n)
{   
    let remainderArray=[]
    let divisableNumber=n;
    while(isnotQuotientOne)
    {       
            let QuotientNumber=divisableNumber/2
            let myRemainder=divisableNumber%2
            divisableNumber=Math.floor(QuotientNumber)
            remainderArray.push(myRemainder)
            if(divisableNumber===0)
            {
              break;
            }
            if(divisableNumber===1)
            {  
                let myRemainder=divisableNumber%2
                remainderArray.push(myRemainder)
                break
            }
    }
    let myStringNum=remainderArray.reverse().join("")
    return myStringNum
}

let steps=0
function makeANumberZero(binaryNum,isRunsFirst)
{
  console.log("i am running agian");

  
  
  let myStringBinaryArray=String(binaryNum).split("")
  let lengthofNum=myStringBinaryArray.length
  console.log("the array is binary array",myStringBinaryArray);
for(let i=lengthofNum-1;i>=0;i--)
{  
   


  console.log("my binary string array is insdie loop ",myStringBinaryArray);
  
  if(myStringBinaryArray[2]==0 && myStringBinaryArray[1]==0 && myStringBinaryArray[0]==0)
  {
break
  }


  console.log("the i value is",i);
  console.log("runs again");

  
  
  
  if(myStringBinaryArray[i]==0 && isRunsFirst===false)
  { 
    if(myStringBinaryArray[i-1]==1)
    {
         myStringBinaryArray[i-1-1]=='1'?myStringBinaryArray[i-1-1]='0':myStringBinaryArray[i-1-1]='1'
         steps=steps+1
        let myBinaryString=myStringBinaryArray.join("")
        console.log("my inary arra y si ",myStringBinaryArray);
        makeANumberZero(myBinaryString,true)  
    }
  }
  else if(myStringBinaryArray[i]==0)
  {   
      steps=steps+1
      myStringBinaryArray[i]='1'
      let myBinaryString=myStringBinaryArray.join("")
      makeANumberZero(myBinaryString,false)
  }
  else if(myStringBinaryArray[i]==1 && myStringBinaryArray[i-1]==0 && myStringBinaryArray[i-1-1]==0)
  { 
    myStringBinaryArray[i]='0'
    steps+=1
    let myBinaryString=myStringBinaryArray.join("")
    makeANumberZero(myBinaryString,false)
  }
  else{
      steps=steps+1
      myStringBinaryArray[i-1]==1?myStringBinaryArray[i-1]='0':myStringBinaryArray[i-1]='1'
      let myBinaryString=myStringBinaryArray.join("")
      console.log("binary array is",myStringBinaryArray);
      console.log("my binary arra is",myBinaryString);
      
      
      makeANumberZero(myBinaryString,false)
    }
  }
  return steps
}



minimumOneBitOperations(6)
let x=!0
console.log(Number(x));


/*
the callstack  max size error occuring 
i don,t have any idea about recursion
if you see this code the things which i know after tryign tons of hours to it
1. we need to  be clever while using recursion as in my case i called function again again.
2.but every function creates its own context.
 and that,s why  my final function done the work,
  other function remains their exections show they can,t exist from stack 
  without doing other operation which are remaining in that function.
  and it cause the function to become they unable to come from stack and they again agian call each other 
  which leads to this error here
3.here i have total 5 function same function in stack each with their own context and own processes
*/