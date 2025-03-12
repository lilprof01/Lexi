import React, { useState } from "react";
import { auth, app, db, provider } from "../Login/Firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailLink } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa6'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate("");

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);

      // Store additional user data in Firestore
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          firstName: firstname,
          lastName: lastname,
          username: username,
          phone: phone,
          age: age,
          gender: gender,
          email: user.email,
          uid: user.uid,
        });
      }
      toast.success("Creating your account...", {position: "top-center"});
      navigate("/greetings");
    } catch (error) {
      toast.success(error.message, {position: "top-center"});
    }
  };

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      console.log("User signed in:", user);
  
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          firstName: "",
          lastName: "",
          username: user.displayName,
          phone: "",
          age: "",
          gender: "",
          email: user.email,
          uid: "",
        });
      }  
      navigate("/greetings");
    } catch (error) {
      console.log("Error during sign-in:", error);
    }
  };

  const handleFacebook = async (e) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      console.log("User signed in:", user);
  
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          firstName: "",
          lastName: "",
          username: user.displayName,
          phone: "",
          age: "",
          gender: "",
          email: user.email,
          uid: "",
        });
      }  
      navigate("/greetings");
    } catch (error) {
      console.log("Error during sign-in:", error);
    }
  };

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#6C3BAA]">
          Create your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full px-[50px] md:px-0 sm:max-w-sm">
        <form onSubmit={signUp} className="space-y-6" action="#" method="POST">
          <div>
            <div className="mt-2">
              <input
                type="text"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                placeholder="First Name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                placeholder="Last Name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Your Preferred Username"
                className="block w-full rounded-md mt-2 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email Address"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Phone Number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <div className="flex justify-center items-center gap-7">
              <select
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                className="block w-[180px] rounded-md bg-white px-3 py-1.5 mt-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              >
                <option value="" disabled defaultValue>
                  Age
                </option>
                <option value="tens">10-20</option>
                <option value="twenties">21-30</option>
                <option value="thirties">31-40</option>
                <option value="forties">41-50</option>
              </select>

              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="block w-[180px] rounded-md bg-white px-3 py-1.5 mt-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              >
                <option value="" disabled defaultValue>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="block w-[250px] md:w-full rounded-md bg-white mt-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#6C3BAA] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center gap-4">
          <button onClick={handleGoogle} className="block w-[180px] rounded-md text-sm/6 font-bold text-center my-5 bg-white px-3 py-1.5 text-[#6C3BAA] outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
            Sign up with Google
          </button>
          <button onClick={handleFacebook} className="block w-[180px] rounded-md text-sm/6 font-bold text-center my-5 bg-white px-3 py-1.5 text-[#6C3BAA] outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
            Sign up with Facebook
          </button>
        </div>

        <p className="text-center text-sm/6 text-gray-500">
          Already one of us?
          <Link to="/login"
            className="pl-[10px] font-semibold text-[#6C3BAA] hover:text-[#6C3BAA]"
          >
            Log in to your account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
