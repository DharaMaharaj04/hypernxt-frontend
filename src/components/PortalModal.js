import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

export default function PortalModal({ onLogin, onClose }) {

  const [mode,setMode] = useState("login");

  return (

    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 overflow-y-auto"
      onClick={onClose}   // click outside closes modal
    >

      <div
        className="bg-white p-6 rounded-lg w-[420px]"
        onClick={(e)=>e.stopPropagation()} // prevent inside click closing
      >

        {mode === "login" && (
          <Login
            onLogin={onLogin}
            goHome={onClose}
            goSignup={()=>setMode("signup")}
            goForgot={()=>setMode("forgot")}
          />
        )}

        {mode === "signup" && (
          <Signup
            goLogin={()=>setMode("login")}
            goHome={onClose}
          />
        )}

        {mode === "forgot" && (
          <ForgotPassword
            goLogin={()=>setMode("login")}
            goHome={onClose}
          />
        )}

      </div>

    </div>
  );
}