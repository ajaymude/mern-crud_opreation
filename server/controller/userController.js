const usermodel = require('../models/userModel')

const adduser = async(req, res)=>{

   try {
    const user = req.body

    const sData = usermodel( user)

    await sData.save()
    console.log(' user data is saved')

    
    res.json({data:user})
    console.log(req.body)
    
   } catch (error) {
    console.log('user controller error ' , error)
    
   }
}

const alluser = async(req, res)=>{

    try {
     
 
     const sData = await usermodel.find({})
 
    
     console.log(' alluser data is saved' ,sData)
 
     
     res.json(sData)
     
     
    } catch (error) {
     console.log('alluser controller error ' , error)
     
    }
 }

 const alluserupdate = async(req, res)=>{

    try {
     const userid = req.params.id
 
     const singleuser= await  usermodel.findById(userid)
     console.log(singleuser )
     res.json({data:singleuser})
     
    } catch (error) {
     console.log('user controller error ' , error)
     
    }
 }

 const alluserupdateone = async(req, res)=>{
    

   try {
    const user = req.body
    await usermodel.updateOne({_id :req.params.id} , user)

    
   } catch (error) {
    console.log('user controller error ' , error)
    
   }
}

const deleteuser = async(req, res)=>{
    

    try {
     const user = req.body
     await usermodel.deleteOne({_id :req.params.id})
     res.json({msg :'user is deleted'})
 
     
    } catch (error) {
     console.log('user controller error ' , error)
     
    }
 }


module.exports= { adduser , alluser , alluserupdate ,alluserupdateone , deleteuser}