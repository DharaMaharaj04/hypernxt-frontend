import React, { useState } from "react";
import logo from "../assets/images/Hypernext Logo Blue.png";

export default function Signup({ goLogin, goHome }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: "",
    password: ""
  });

  const [gstFile, setGstFile] = useState(null);
  const [certFile, setCertFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const BRAND = {
    primary: "#003366",
    accent: "#00AEEF",
    bg: "#F5F9FC",
    text: "#0B1F33",
    muted: "#5B6B7C",
    border: "#E6EEF5"
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {

      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (gstFile) formData.append("gstFile", gstFile);
      if (certFile) formData.append("certFile", certFile);

      const res = await fetch("https://hypernxt-backend.onrender.com/signup", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data.success) {

        alert("Vendor application submitted successfully");

        goLogin();

      } else {

        alert(data.message || "Signup failed");

      }

    } catch (err) {

      console.error("Signup error:", err);
      alert("Server error. Please try again.");

    } finally {

      setLoading(false);

    }

  };

  return (
    <div style={styles.card(BRAND)}>

      <div style={styles.logo}>
        <img src={logo} alt="Hypernext" style={{ height: "40px" }} />
      </div>

      <h2 style={styles.title(BRAND)}>Vendor Registration</h2>

      <form onSubmit={handleSubmit} style={styles.form}>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          style={styles.input(BRAND)}
        />

        <input
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
          required
          style={styles.input(BRAND)}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          style={styles.input(BRAND)}
        />

        <textarea
          name="services"
          placeholder="Services Offered"
          onChange={handleChange}
          required
          style={styles.textarea(BRAND)}
        />

        <input
          name="email"
          type="email"
          placeholder="Email address"
          onChange={handleChange}
          required
          style={styles.input(BRAND)}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={styles.input(BRAND)}
        />

        <div style={styles.fileBlock}>
          <label>GST Certificate</label>
          <input
            type="file"
            required
            onChange={(e) => setGstFile(e.target.files[0])}
          />
        </div>

        <div style={styles.fileBlock}>
          <label>Certificates</label>
          <input
            type="file"
            onChange={(e) => setCertFile(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={styles.button(BRAND)}
        >
          {loading ? "Submitting..." : "Submit Vendor Application"}
        </button>

      </form>

      <div style={styles.switch(BRAND)}>
        Already have account?
        <span onClick={goLogin} style={styles.link(BRAND)}>
          Login
        </span>
      </div>

    </div>
  );
}

const styles = {

  card: (BRAND) => ({
    width: "380px",
    maxHeight: "80vh",
    overflowY: "auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    border: `1px solid ${BRAND.border}`,
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
  }),

  logo: {
    textAlign: "center",
    marginBottom: "10px"
  },

  title: (BRAND) => ({
    textAlign: "center",
    color: BRAND.text,
    marginBottom: "20px"
  }),

  form: {
    display: "flex",
    flexDirection: "column"
  },

  input: (BRAND) => ({
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    border: `1px solid ${BRAND.border}`,
    borderRadius: "6px"
  }),

  textarea: (BRAND) => ({
    width: "100%",
    padding: "12px",
    height: "80px",
    marginBottom: "12px",
    border: `1px solid ${BRAND.border}`,
    borderRadius: "6px"
  }),

  fileBlock: {
    marginBottom: "12px"
  },

  button: (BRAND) => ({
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: BRAND.primary,
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600"
  }),

  switch: (BRAND) => ({
    marginTop: "15px",
    textAlign: "center",
    color: BRAND.muted,
    fontSize: "14px"
  }),

  link: (BRAND) => ({
    color: BRAND.accent,
    marginLeft: "6px",
    cursor: "pointer",
    fontWeight: "600"
  })
};