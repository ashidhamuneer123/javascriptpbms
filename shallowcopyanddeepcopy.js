console.log("SHALLOW COPY")
const originalobject = {
    a:1,
    b:{c:2},
    d:4
}
const shallowCopy = {...originalobject}
console.log(shallowCopy)
shallowCopy.b.c=5
console.log(originalobject)
originalobject.b.c=9
console.log(shallowCopy)

//deepcopy
console.log("DEEP COPY")
const originalobjects={
    a:1,
    b:{c:2}
}
let deepCopy = JSON.parse(JSON.stringify(originalobjects))
console.log(deepCopy)
deepCopy.b.c=8
console.log(originalobjects)
console.log(deepCopy)


let arr1=[2,3,4,5,6]
let shallowcopy1=[...arr1]
console.log(shallowcopy1)
let deepcopy1=JSON.parse(JSON.stringify(arr1))
console.log(deepcopy1)