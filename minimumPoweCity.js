/**
 * @param {number[]} stations
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
let maxPowerBeforeK = []
let maxPowerAfterK=[]
var maxPower = function (stations, r, k,isKadd) {
 if (r > 0) {
        for (let i = 0; i < stations.length; i++) {
            if (i === 0) {
                let currentStationPower = stations[i]
                let PowerSurroundingTotal = stations[i + 1]
                if(isKadd)
               { 
     CalculateThePower(currentStationPower, PowerSurroundingTotal,isKadd)
               }
               else
               {
                 CalculateThePower(currentStationPower, PowerSurroundingTotal)
               }
            }
            else {
                if(i===stations.length-1)
                {
                let currentStationPower = stations[i]
                let PowerSurroundingTotal = stations[i - 1]
                if(isKadd)
                {
        CalculateThePower(currentStationPower, PowerSurroundingTotal,isKadd)
                }
                else
                {
                     CalculateThePower(currentStationPower, PowerSurroundingTotal)
                }
                }
                else
                {
                let currentStationPower = stations[i]
                let PowerSurroundingTotal = stations[i + 1] + stations[i - 1]
                if(isKadd)
                {
 CalculateThePower(currentStationPower, PowerSurroundingTotal,isKadd)
                }
                else
                {
                CalculateThePower(currentStationPower, PowerSurroundingTotal)
                }
                }
            }
        }
    }
    else {
         let minimumPower= FindWekestPower(stations)
         return minimumPower
    }
    }


function CalculateThePower(CurrentStationPower, PowerSurroundingTotal,isKadd) {
    //here we calulatiogn total power for each  city such as zero,first etc by its power + its surroudnign toatl power
    let CurrentStationTotalPower = CurrentStationPower + PowerSurroundingTotal
    if(isKadd)
    {
        maxPowerAfterK.push(CurrentStationTotalPower)
    }
    else
    {
    maxPowerBeforeK.push(CurrentStationTotalPower)
    }
}




function FindWekestPower(maxPowerArray)
{
let weakestPower=Math.min(...maxPowerArray)
return weakestPower
}



function maximumPossiblePower(stations,r,k)
{
let minimumPower;
for(let i=0;i<stations.length;i++)
{
    let slicedStations=stations.slice(0)
    slicedStations[i]+=k
    maxPower(slicedStations,r,k,true)
 minimumPower=CompareIneachIteration()
if(minimumPower)
{  
    break;
}
}
return minimumPower
}

function CompareIneachIteration()
{
 let minimumVal=Math.min(...maxPowerBeforeK)
 let minmaxVal=FindWekestPower(maxPowerAfterK)
 if(minmaxVal>minimumVal)
 {
    return minmaxVal
 }
 maxPowerAfterK.splice(0)
}

 let minimumPower2=maxPower([1, 2, 4, 5, 0], 0, 3)
 maxPower([1,2,4,5,0],1,2)
 let minimumPower=maximumPossiblePower([1,2,4,5,0],1,2)

 console.log("the minimum power for  station is",minimumPower)
 console.log("the minimum power is in case fo range is zero then",minimumPower2)


 /*this is my written code but due to the my own problem i go wrong logic
 and i  can,t returngin the answers from the main function that,s why leetcode can,t accepting even my both cases are right
 one case is returning from maxPowerFunction but another one i returngin from maxiumumPossiblePowerFunction and leetcode can,t know that
 i tried to tweak it in such way show it get managed and return the value of maximumPossiblePower function from  maxPower
 but my logic is too depended on in one way show it unable to  handle it. but it gives answers
 this is not a any kind of dsa based approach i tried just brute way i mean just conditionals
 but for submission i have to go with ai code at its not get accepted there!  
 */