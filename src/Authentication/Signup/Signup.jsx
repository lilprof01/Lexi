import React, { useState } from "react";
import { auth, app, db } from "../Login/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // console.log(userCredential);
    navigate('/dashboard');
  })
  .catch((error) => {
    console.log(error);
  });

    }

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#6C3BAA]">
          Create your Account
        </h2>
      </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={signUp} className="space-y-6" action="#" method="POST">
      <div>
        <div className="mt-2">
          <input type="text" id='firstname' required placeholder='First Name' className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
        <div className="mt-2">
          <input type="text" id='lastname' required placeholder='Last Name' className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          <input type="text" id='username' required placeholder='Your Preferred Username' className="block w-full rounded-md mt-2 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
        <div className="mt-2">
          <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email Address' className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
        <div className="mt-2">
          <input type="text" id='phone' required placeholder='Phone Number' className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          <select id="age" required className="block w-full rounded-md bg-white px-3 py-1.5 mt-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
                <option value="" disabled defaultValue>Age</option>
                <option value="tens">10-20</option>
                <option value="twenties">21-30</option>
                <option value="thirties">31-40</option>
                <option value="forties">41-50</option>
              </select>

              <select id="gender" required className="block w-full rounded-md bg-white px-3 py-1.5 mt-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm">
                <option value="" disabled defaultValue>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="block w-full rounded-md bg-white mt-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#6C3BAA] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:text-[#6C3BAA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <div>
          <h2 className="block w-full rounded-md text-sm/6 font-bold text-center my-5 bg-white px-3 py-1.5 text-[#6C3BAA] outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
            Sign up with Google
          </h2>
          <h2 className="block w-full rounded-md text-sm/6 font-bold text-center my-5 bg-white px-3 py-1.5 text-[#6C3BAA] outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
            Sign up with Facebook
          </h2>
        </div>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already one of us?
          <a
            href="#"
            className="pl-[10px] font-semibold text-[#6C3BAA] hover:text-[#6C3BAA]"
          >
            Log in to your account
          </a>
        </p>
      </div>
    </div>
    
  )
}

export default Signup