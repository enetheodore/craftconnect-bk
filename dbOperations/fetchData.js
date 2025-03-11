const testModel = require("../models/testModel")


const testFetch = async ()=>{
    const data = await testModel.find({},(err,docs)=>{
        if(err){
            console.log(err)
        }else{
            console.log(docs)
        }
    }
    )
    return data
}
