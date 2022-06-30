import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import "./RequireAuth.css";

const RequireAuth = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  return (
    <div className="h-[88vh] max-w-screen flex justify-center items-center">
      <div className="requireAuthContainer text-center">
        <h2 className="text-2xl">Please login to get started.</h2>
        <button
          className="mt-6 requireAuthLoginBtn mx-auto"
          onClick={() => signInWithGoogle()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default RequireAuth;
