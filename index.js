//1. Binary (2n)
//2. Dicimal (10n)
//3. Hexadecimal (16n)

//10n -> 16n

let n = 15

w = n.toString(16)
console.log(`16진법 답은 ${w}`)

let y = Math.floor(n/16)
console.log(y)

let list =["0123456789ABCDEF"]
const list1 = list.split("");
console.log(list1)
console.log(list1[y])

let x = (n%16)

console.log(list1[y]+list1[x])
//if (y<16){

//}X
    
//else (y>16);

//let x = (n%16)
//    console.log(x)

// let u = Math.floor(y)
// ㄴ    console.log(u)


//let x = [0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F]

