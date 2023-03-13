let array = [1,2,3,'test','test2',1,2,3,4]

console.log(array)
console.log(array[0])
console.log(array[3])

for(let i=0; i<array.length; i++){
    console.log(array[i])
}

console.log("----------for of--------------")
for(el of array){
    console.log(el)
}

console.log("---------map---------------")
array.map((data) => {
    console.log(data)
});