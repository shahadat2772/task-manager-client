import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import Loader from "../Shared/Loader/Loader";
import RequireAuth from "../Shared/RequireAuth/RequireAuth";

const Todo = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="pt-[64px]">
      {user ? (
        <div className="todoContainer">Hello</div>
      ) : (
        <RequireAuth></RequireAuth>
      )}
    </div>
  );
};

export default Todo;
