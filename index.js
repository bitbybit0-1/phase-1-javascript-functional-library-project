function input(collection){
    return collection instanceof Array?collection.slice():Object.values(collection)
}
const myEach=(collection, callback)=>{
  const newInput = input(collection)
  for(let i=0;i<newInput.length;i++){
    callback(newInput[i])
  }
    return collection
}
const myMap=(collection,callback)=>{
    const newInput = input(collection)
    let array = []
    for(let x=0;x<newInput.length;x++){
       array =callback(newInput[x])
       return array             
    }console.log(array,"array")
}