import React, { useState } from "react";
import { auth, app, provider } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        toast.success("Logging you into your account...", {
          position: "top-center",
        });
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.success(error.message, { position: "top-center" });
      });
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
        navigate("/dashboard");
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
        navigate("/dashboard");
      } catch (error) {
        console.log("Error during sign-in:", error);
      }
    };


  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-[25px] lg:text-2xl/9  font-bold tracking-tight text-[#6C3BAA]">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full px-[50px] md:px-0 sm:max-w-sm">
        <form className="space-y-6" onSubmit={signIn} method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link to="/forgotpassword" className="font-semibold text-[#6C3BAA]">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#6C3BAA] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center gap-4">
          <button onClick={handleGoogle} className="block w-[180px] rounded-md text-sm/6 font-bold text-center my-5 bg-white px-3 py-1.5 text-[#6C3BAA] outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
            Sign in with Google
          </button>
          <button onClick={handleFacebook} className="block w-[180px] rounded-md text-sm/6 font-bold text-center my-5 bg-white px-3 py-1.5 text-[#6C3BAA] outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
            Sign in with Facebook
          </button>
        </div>

        <p className="mt-4 text-center text-sm/6 text-gray-500">
          Not one of us?
          <Link
            to="/signup"
            className="pl-[10px] font-semibold text-[#6C3BAA] hover:text-[#6C3BAA]"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
