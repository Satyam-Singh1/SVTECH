import Query from "../Models/query.model.js";


export const saveQuery = async(req ,res)=>{
try {
 const {name , email , message}= req.body;
  const newQuery = new Query({
    name,
    email,
    message
  });
  console.log("New query reached")
  await newQuery.save();
  res.status(201).json({message:"Query saved successfully"});
} catch (error) {
  res.status(500).json({message:"Internal server error"});  
}
}