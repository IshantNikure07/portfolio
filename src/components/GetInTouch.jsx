import React, { useRef } from 'react'
import emailjs from 'emailjs-com'



const GetInTouch = () => {

  const form = useRef()

  const emailData = (e)=>{
    e.preventDefault()

   
    emailjs
    .sendForm(
      "service_0d4vy47","template_67miqg9",
      form.current,"0Se2hvY_gyenYXiL0"
  )

  .then(
    (result)=>{
      console.log(result.text)
      alert("message sent successfully")

    },
    (error)=>{
      console.log(error.text)
      alert("failed")
    }
  )

  e.target.reset()
  }

  return (
    <div>
      <div className="h-[80%] bg-black py-6 flex flex-col justify-center sm:py-12 sm:mt-24 ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:rotate-6 duration-300 ease-linear sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-gray-800 shadow-2xl sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl font-bold">Contact Me!</h1>
            <p className="text-gray-400">
              Fill up the form below to send me a email.
            </p>
          </div>
          <form ref={form} onSubmit={emailData}>
            <input
              className="shadow-lg mb-4 appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="shadow-lg mb-4 appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="shadow-lg mb-4 appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="_subject"
              required
            />
            <textarea
              className="shadow-lg mb-4 min-h-0 appearance-none border border-gray-600 rounded h-64 w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
              style={{ height: "121px" }}
              required
            ></textarea>
            <div className="flex justify-between">
                <input
                  className="shadow-lg bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                  type="reset"
                  value="Reset"
                />
              <input className="shadow-lg bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                type="submit"
                value="Send ➤"
              />
             

            </div>
          </form>
        </div>
      </div>
    </div>
  
    </div>
  )
}

export default GetInTouch
