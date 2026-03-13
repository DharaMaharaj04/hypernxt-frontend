import React, { useState } from "react";
import logo from "../assets/images/Hypernext Logo Blue.png";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

export default function Login({ onLogin }) {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const [showSignup,setShowSignup] = useState(false);
  const [showForgot,setShowForgot] = useState(false);

  const BRAND = {
    primary:"#003366",
    accent:"#00AEEF",
    bg:"#F5F9FC",
    text:"#0B1F33",
    muted:"#5B6B7C",
    border:"#E6EEF5"
  };

  /* ---------------- LOGIN SUBMIT ---------------- */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(loading) return;

    setLoading(true);

    try{

      const res = await fetch(
        "https://hypernxt-backend.onrender.com/login",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({email,password})
        }
      );

      const data = await res.json();

      if(!res.ok){
        throw new Error(data.message || "Server error");
      }

      if(data.success){

        localStorage.setItem("token",data.token);

        setEmail("");
        setPassword("");

        onLogin();

      }else{

        alert(data.message || "Invalid credentials");

      }

    }catch(err){

      console.error("Login error:",err);

      alert(err.message || "Server error");

    }

    setLoading(false);

  };

  /* ---------------- NAVIGATION ---------------- */

  if(showSignup){
    return <Signup goLogin={()=>setShowSignup(false)} />;
  }

  if(showForgot){
    return <ForgotPassword goLogin={()=>setShowForgot(false)} />;
  }

  return (

    <div style={{
      height:"100vh",
      background:BRAND.bg,
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>

      <div style={{
        width:"380px",
        background:"#fff",
        padding:"40px",
        borderRadius:"10px",
        border:`1px solid ${BRAND.border}`,
        boxShadow:"0 10px 30px rgba(0,0,0,0.05)"
      }}>

        <div style={{textAlign:"center",marginBottom:"20px"}}>
          <img src={logo} alt="Hypernext" style={{height:"40px"}}/>
        </div>

        <h2 style={{
          textAlign:"center",
          color:BRAND.text,
          marginBottom:"20px"
        }}>
          Vendor Portal Login
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            style={inputStyle(BRAND)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            style={inputStyle(BRAND)}
          />

          <button
            type="submit"
            disabled={loading}
            style={buttonStyle(BRAND)}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <div style={{
          textAlign:"right",
          marginTop:"10px"
        }}>
          <span
            onClick={()=>setShowForgot(true)}
            style={{
              color:BRAND.accent,
              cursor:"pointer",
              fontSize:"13px"
            }}
          >
            Forgot password?
          </span>
        </div>

        <div style={{
          marginTop:"15px",
          textAlign:"center",
          color:BRAND.muted,
          fontSize:"14px"
        }}>

          New vendor?

          <span
            onClick={()=>setShowSignup(true)}
            style={{
              color:BRAND.accent,
              marginLeft:"6px",
              cursor:"pointer",
              fontWeight:"600"
            }}
          >
            Create account
          </span>

        </div>

      </div>

    </div>

  );

}

/* ---------------- STYLES ---------------- */

function inputStyle(BRAND){
  return {
    width:"100%",
    padding:"12px",
    marginBottom:"12px",
    border:`1px solid ${BRAND.border}`,
    borderRadius:"6px"
  };
}

function buttonStyle(BRAND){
  return {
    width:"100%",
    padding:"12px",
    background:BRAND.primary,
    color:"#fff",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer",
    fontWeight:"600"
  };
}