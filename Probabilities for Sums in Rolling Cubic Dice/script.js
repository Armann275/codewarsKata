function rolldiceSumProb(sum, dice){
    let count = 0;
    const CounterArr = [];
    
    for(let f = 0; f < dice; f++){
        CounterArr.push(1)
    }
    
    while(CounterArr[0] <= 6){
        recoursive();
    }

    function recoursive(){
        for(let i = 1; i <= 6; i++){
            CounterArr[CounterArr.length - 1] = i
            if (!CounterArr.includes(7)) {
                if(CounterArr.reduce((acc,ell) => acc += ell,0) === sum){
                    count++
                }   
            }
            
        }
            if (CounterArr[CounterArr.length - 1] === 6) {
                    CounterArr[CounterArr.length - 2]++
                    CounterArr[CounterArr.length - 1] = 1
            }

            let index1;   
            for(let j = 0; j < CounterArr.length; j++){
                if (j > 0 && CounterArr[j] === 7) {
                        CounterArr[j - 1]++
                        index1 = j
                }
            }
            
            
            if (index1) {
                for(let i = index1; i < CounterArr.length; i++){
                   CounterArr[i] = 1
                }
            }
    }    
    return count / Math.pow(6,dice) 
}



const res = rolldiceSumProb(8, 3)
console.log(res);

// const array1 = [1, 2, 3,7];
// if (array1.includes(7)) {
//     console.log(array1);
    
// }
// console.log();