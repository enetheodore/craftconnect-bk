const testModel = require("../models/testModel")


const testFetch = async ()=>{
    const data = await testModel.find()
    console.log(data)
    return data
}

module.exports = {testFetch}
