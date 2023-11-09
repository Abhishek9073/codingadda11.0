'use client'
import { useState } from "react";

export default function ContactForm() {

const[fullname,setFullname] = useState("");
const[phone,setPhone]= useState("");
const[email,setEmail] = useState("");

const[message,setMessage] = useState("");
const [error, setError] = useState([]);
const [success, setSuccess] = useState(false);

const handleSubmit = async(e) => {
  e.preventDefault();




const res = await fetch( "api/contact", {
  method: "POST",
  headers: {
    "content-type":"application/json"
  },
  body: JSON.stringify({
    fullname,
    phone,
    email,
    message
  }),
});

const {msg, success} = await res.json();
setError(msg);
setSuccess(success);

if (success){
  setFullname("");
  setPhone("");
  setEmail("");
  setMessage("");
}


}


  return (
    <>
      <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input onChange={e =>setFullname(e.target.value) } 
          value= {fullname}
          type="text"
           id="fullname" 
           placeholder="Name" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input onChange={e =>setPhone(e.target.value) } 
          value= {phone}
          type="text"
           id="phone" 
           placeholder="Phone" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
          onChange={e =>setEmail(e.target.value) } 
          value= {email}
           type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea 
          onChange={e =>setMessage(e.target.value) } 
          value= {message} className="h-32" id="message" placeholder="Type Your Message here.. "></textarea>{" "}
        </div>

        <button className="bg-sky-700 p-3 text-white font-bold hover:bg-green-700" type="submit">Send</button>
      </form> 

      <div className="bg-slate-200 flex flex-col">

      {error &&  error.map((e) => (
        <div className={`${success ? "text-green-700" : "text-red-600"} px-5 py-2`}>
      {e}
      </div>
      ))}
      
      </div>
    </>
  );
}
