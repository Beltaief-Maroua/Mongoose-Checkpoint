const express = require('express')


const app = express();

const Person = require("./Models/Person")


Person.insertMany([{name:"Iyed" ,age : 28 , favoriteFoods : ["tacos" ,"chapati" , "cake"]} ,
                   {name:"Iyed" ,age : 28 , favoriteFoods : ["tacos" ,"chapati" , "cake"]} ,
                   {name:"Maroua" , age : 24 ,favoriteFoods : ["pate" , "lablabi" , "cake"]},
                   {name:"Arij", age:23, favoriteFoods: ["cake" , "tabouna", "escalope"]} ,
                   {name:"Nebegh" , age : 22 ,favoriteFoods : ["sauce blache" , "lazagne" , "pizza"]} ,
                   {name:"Nabiha" , age : 24 ,favoriteFoods : ["masfouf" , "légumes" , "fruits"]}])

const personList = async () =>  {
   const list =  await Person.find({})
} 
//console.log(personList());

// find one by favorite food 
Person.findOne({favoriteFoods:'cake'} , (err,data)=>{
    if(err) throw err 
   // console.log(data)
})



// find person by ID 
let id = "61f800cc52e5a20d842db7a6"
Person.findById({_id : id} , (err , data)=>{
  if(err) throw err  
  //console.log(data)
})

//find and update
let id2 = "61fa504f52e3c303ef7a1366"
Person.findOneAndUpdate({_id : id2} ,{$push: {favoriteFoods:  "sandwich"}},(err,data)=> {  
    if (err) throw err

   //console.log(data);
})
// find one and delete
let id3 ="61fa50b8d422c45fd80b0d9c"
Person.findByIdAndRemove({_id:id3},(err)=>{
    if (err) throw err
   // console.log('Deleted successfully');
}) 
//check if delete 
Person.findById({_id : id3} , (err , data)=>{
  if(err) throw err  
 // console.log(data)
})

// delete many
Person.deleteMany({name:'Iyed'} ,(err)=>{
    if(err) throw err
   // console.log('Mary is removed');
})

//Chain Search Query Helpers to Narrow Search Results
Person.find({favoriteFoods:'cake'})
    .limit(2)
    .sort({firstName: 1})
    .select({age: true})
    .exect()
    .then(docs => {
        console.log(docs)
      })
     .catch(err => {
        console.error(err)
      })

app.listen(3090 , (err)=>{
    if (err) {
        console.log('error')
    }
    console.log(`Server is runnig 3090`)
})