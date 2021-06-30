
function addCommas(num) {
    //convert to string and split into an array
    // let arr;
    // let afterDeci;
    // let deci = num.toString().indexOf('.')
    // if (deci) {
    //     arr = num.toString().slice(0, deci)
    //     afterDeci = num.toString().slice(0, num.length)
    // } 
       let arr = num.toString().split('').reverse()        
    


    let commaArr = arr.map((el, idx, arr) => {
        // console.log(arr[idx],idx)
        if ((idx + 1) % 3 === 0){
        return (`,${arr[idx]}`)
        } else {
            return arr[idx]
        }
    });
    return commaArr.reverse().join('');
}

let num = 1000000;


module.exports = addCommas;
