
// let num = 9876543210;
function addCommas(num) {
    //convert to string and split into an array
    let arr = num.toString().split('').reverse()
    console.log(arr)

    let commaArr = arr.map((el, idx, arr) => {
        // console.log(arr[idx],idx)
        if ((idx + 1) % 3 === 0){
        return (`,${arr[idx]}`)
        } else {
            return arr[idx]
        }
    });
    return commaArr.reverse().join('')
}

let num = 9876543210;


module.exports = addCommas;

9,876,543,210