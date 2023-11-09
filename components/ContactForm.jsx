
'use client'
import React, { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          fullname,
          phone,
          email,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      const { msg, isSuccess } = await res.json();

      setError(isSuccess ? "" : msg);
      setSuccess(isSuccess);

      if (isSuccess) {
        setFullname("");
        setPhone("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
      <label htmlFor="Name">Name</label>
       
        <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Full Name" className="border" />
       
        <label htmlFor="Phone">Phone</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="border" />
        
        <label htmlFor="Email">Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border" />
        
        <label htmlFor="Message">Write Your Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="border"></textarea>
        <button className="bg-sky-700 p-3 text-white font-bold hover:bg-green-700" type="submit">Send</button>
      </form>

      <div className="bg-slate-200 flex flex-col">
        {error && <div className={`${success ? "text-green-700" : "text-red-600"} px-5 py-2`}>{error}</div>}
      </div>
    </>
  );
}
