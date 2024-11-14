let MyJSON = `{
    "name": "John",
    "age": 30,
    "isStudent": false,
    "hobbies": ["reading", "gaming"],
    "address": {
        "city": "New York",
        "zipcode": "10001"
    },
    "isMarried": null
}`



// Parsing JSON  json ===> object

const parsedJSON = JSON.parse(MyJSON)
console.log(parsedJSON)



// Stringify JSON  obj ===> json

let mySampleObj = { name: "John", age: 30 }

const StringifiedObj = JSON.stringify(mySampleObj)

console.log(StringifiedObj)


