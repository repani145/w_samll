// debugger;
// a=[1,2,3]

// // foreach , map , filter ,find , reduce  ,,some,every
// var aaa=10
// a.forEach(siva)

// function siva(vall,inde,aury) {
// 	console.log(vall)
// 	console.log(inde)
// 	console.log(aury)
// 	console.log('aaa=',aaa)
// 	aaa++
// 	// return vall
// }
// // siva()

n=+prompt('enter Array length required :')
arr=[]
for(i=0;i<n;i++){
    t=+prompt(`enter ${i} position of an array :`)
    arr.push(t)
}
console.log(arr)
nn=+prompt(`Which smallest number to print( < ${n}) :`)

for(i of arr){
    c=0
    for(j of arr){
        if(i>j){
            c++
        }
    }
    if(c==nn-1){
        temp=`your ${nn} smallest number is : ${i}`;
    }
}

var hh=document.createElement('h1')
document.body.appendChild(hh)

hh.innerText=` array is   : [ ${arr} ]`

var hhh=document.createElement('h1')
document.body.appendChild(hhh)

hhh.innerText=temp;
