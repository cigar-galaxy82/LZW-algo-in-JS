let table =[]
var s1 = "WYS*WYG+++WYS*WYSWYSG"
for(var i=0;i<=255;i++){
    let ch = ""
    ch += String.fromCharCode(i)
    table[ch] = i
}

var p = "";
var c = "";
p +=s1[0]
var code = 256;
let array = []

for(var i=0;i<s1.length;i++){
    if(i!=s1.length-1){
        c+=s1[i+1]
    }
    if(table[p+c]){
        p = p + c;
    }else{
        //console.log(p +" " + table[p])
        //console.log(p+c + " " + code)
        array.push(table[p])
        table[p+c] = code
        code++;
        p =c;
    }
    c = ""
}

// var ans = ''
// let array2 = [87, 89, 83, 42, 256, 71, 43, 262, 256, 258, 264, 264, 71]
// for (var i = 0; i <= 255; i++) {
//     var ch = "";
//     ch += String.fromCharCode(i);
//     table[i] = ch;
// }
// console.log(table)
// var old = array2[0]
// //console.log(old)
// var n
// var s = table[old];
// //console.log(s[0])
// var c1 = "";
// c1 += s[0];
// ans +=c1
// //first character
// console.log(c1);
// var count = 256;

// for (var i = 0; i < array2.length-1; i++) {
//     n = array2[i + 1];
//     //console.log(table[n])
//     if (table[n] === undefined) {
//         console.log(table[n])
//         s = table[old];
//         s = s + c1;
//     }
//     else {
//         s = table[n];
//     }
//     //console.log(s)
//     ans +=s
//     c1 = "";
//     c1 += s[0];
//     table[count] = table[old] + c1;
//     count++;
//     old = n;
// }

array.push(table[p])
// //console.log(table)
// console.log(ans)
// console.log(str)
// if(str === ans){
//     console.log("EQUAL")
// }

console.log(array)