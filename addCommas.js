// function addCommas(num) {
//     //convert to string and split into an array
//     let arr = num.toString().split('')
//     console.log(arr)

//     //loop backwards, skipping every 3, adding ','
//     let commaNum = []
//     for (let i = arr.length; i >= 0; i--){
        
//         if ((i + 2) % 3 === 0) {
//             console.log(arr[i])
//             commaNum.unshift(`,${arr[i]}`)
//         } else {
//             commaNum.unshift(arr[i])
//         }
//     }
//     console.log(commaNum)
// }

// let num = 9876543210;
function addCommas(num) {
    //convert to string and split into an array
    let arr = num.toString().split('')
    console.log(arr)

    //loop backwards, skipping every 3, adding ','
    let commaNum = [];
    for (let i = arr.length; i > 0; i--){
        // console.log(arr[i], i)
        if (i !== 0 && ((i + 2) % 3 === 0)) {
            commaNum.unshift(`,${arr[i]}`)
        } else (
            commaNum.unshift(arr[i])
        )
    }
    console.log(commaNum)
}

let num = 9876543210;


module.exports = addCommas;

9,876,543,210