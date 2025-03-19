import mongoose from "mongoose";

const{model, Schema}=mongoose;

const userSchema= new Schema(
        {
          userName:{
             type:String,
             required:true
         

          }, 
           userEmail:{
                 type:String,
                 require:true


           },
           userPassword:{
                      type:String,
                      required:true

           },
            userRole:{

                type:String,
                default: "user",
                enum:["user", "admin"],
                required:true,
            },
            tokens:{
                accessToken:{
                    type:String
                }
               
            }

        }
)
const User =model("user",userSchema);
export default User;