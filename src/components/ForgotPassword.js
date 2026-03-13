import React, { useState } from "react";
import logo from "../assets/images/Hypernext Logo Blue.png";

export default function ForgotPassword({ goLogin, goHome }) {

  const [email,setEmail] = useState("");
  const [otp,setOtp] = useState("");
  const [password,setPassword] = useState("");
  const [step,setStep] = useState(1);
  const [sending,setSending] = useState(false);
  const [loading,setLoading] = useState(false);

  const BRAND = {
    primary:"#003366",
    accent:"#00AEEF",
    bg:"#F5F9FC",
    text:"#0B1F33",
    muted:"#5B6B7C",
    border:"#E6EEF5"
  };

  /* SEND OTP */

  const sendOTP = async () => {

    if(!email){
      alert("Please enter your email");
      return;
    }

    if(sending) return;

    setSending(true);

    try{

      const res = await fetch("https://hypernxt-backend.onrender.com/forgot-password",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
      });

      const data = await res.json();

      if(data.success){

        alert("OTP sent to your email");

        setStep(2);

      }else{

        alert("Email not found");

      }

    }catch(err){

      console.error(err);
      alert("Server error");

    }

    setSending(false);

  };

  /* RESET PASSWORD */

  const resetPassword = async () => {

    if(!otp || !password){
      alert("Please enter OTP and new password");
      return;
    }

    setLoading(true);

    try{

      const res = await fetch("https://hypernxt-backend.onrender.com/reset-password",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          otp,
          password
        })
      });

      const data = await res.json();

      if(data.success){

        alert("Password updated successfully");

        goLogin();

      }else{

        alert("Invalid OTP");

      }

    }catch(err){

      console.error(err);
      alert("Server error");

    }

    setLoading(false);

  };

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

        {/* Logo */}

        <div style={{textAlign:"center",marginBottom:"20px"}}>
          <img src={logo} alt="Hypernext" style={{height:"40px"}}/>
        </div>

        <h2 style={{
          textAlign:"center",
          color:BRAND.text,
          marginBottom:"20px"
        }}>
          Reset Password
        </h2>

        {/* STEP 1 */}

        {step === 1 && (

          <>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              style={inputStyle(BRAND)}
            />

            <button
              onClick={sendOTP}
              disabled={sending}
              style={buttonStyle(BRAND)}
            >
              {sending ? "Sending..." : "Send OTP"}
            </button>
          </>

        )}

        {/* STEP 2 */}

        {step === 2 && (

          <>
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e)=>setOtp(e.target.value)}
              style={inputStyle(BRAND)}
            />

            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              style={inputStyle(BRAND)}
            />

            <button
              onClick={resetPassword}
              disabled={loading}
              style={buttonStyle(BRAND)}
            >
              {loading ? "Updating..." : "Reset Password"}
            </button>
          </>

        )}

        {/* Login link */}

        <div style={{
          marginTop:"15px",
          textAlign:"center",
          color:BRAND.muted,
          fontSize:"14px"
        }}>

          Back to

          <span
            onClick={goLogin}
            style={{
              color:BRAND.accent,
              marginLeft:"6px",
              cursor:"pointer",
              fontWeight:"600"
            }}
          >
            Login
          </span>

        </div>

        {/* Back to website */}

        <div style={{
          marginTop:"10px",
          textAlign:"center",
          color:BRAND.muted,
          fontSize:"14px"
        }}>


        </div>

      </div>

    </div>
  );
}

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