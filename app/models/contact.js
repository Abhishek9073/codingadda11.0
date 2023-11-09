import mongoose , {Schema} from "mongoose";

const contactSchema = new Schema({


  fullname: {
    type : String,
    required : [true , "Name Is Required."],
    trim : true , 
    minLength : [2, "Name must be more than  2 characters."],
    maxLength : [50, "Name must be less than 50 characters."],
  },


  phone: {
    type : String,
   
   
  },

  email: {
    type: String,
    required : [true , "Email Is Required."],
    match : [ /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
  "Invalid email address"],
  },

  message : {
    type: String,
    required : [true , "Message Is Required."],

  },

  date : {
    type : Date ,
    default : Date.now , 
  },



});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);


export default Contact;