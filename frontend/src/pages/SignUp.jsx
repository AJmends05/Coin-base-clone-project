import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/common";

function SignUp() {
  const navigate = useNavigate();
  const [cookieDismissed, setCookieDismissed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }
      if (data.user) {
  localStorage.setItem("user", JSON.stringify(data.user));
}

      // Registration successful — go to home
      navigate("/");
    } catch (err) {
      setError("Unable to connect to server. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>

      {/* Header */}
      <header style={{ padding: "16px 24px", borderBottom: "1px solid #e5e7eb" }}>
        <Link to="/">
          <Logo size={22} />
        </Link>
      </header>

      {/* Main */}
      <main style={{
        flex: 1, display: "flex", justifyContent: "center",
        alignItems: "center", padding: "40px 20px"
      }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>

          <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "10px", color: "#111" }}>
            Create your account
          </h1>

          <p style={{ fontSize: "16px", color: "#6b7280", marginBottom: "28px", lineHeight: "1.5" }}>
            Access all that Coinbase has to offer with a single account.
          </p>

          {/* Demo warning */}
          <p style={{
            fontSize: "13px", color: "#dc2626", marginBottom: "20px",
            padding: "10px", backgroundColor: "#fef2f2",
            borderRadius: "8px", textAlign: "center"
          }}>
            Demo app — do not use your real password.
          </p>

          {/* Error message */}
          {error && (
            <div style={{
              padding: "12px", marginBottom: "16px", backgroundColor: "#fef2f2",
              border: "1px solid #fecaca", borderRadius: "8px",
              fontSize: "14px", color: "#dc2626"
            }}>
              {error}
            </div>
          )}

          {/* Name */}
          <label style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "6px", color: "#111" }}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%", padding: "14px 16px", border: "1.5px solid #d1d5db",
              borderRadius: "8px", fontSize: "16px", outline: "none",
              marginBottom: "16px", boxSizing: "border-box", color: "#111"
            }}
            onFocus={(e) => e.target.style.borderColor = "#3b71e8"}
            onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
          />

          {/* Email */}
          <label style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "6px", color: "#111" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%", padding: "14px 16px", border: "1.5px solid #d1d5db",
              borderRadius: "8px", fontSize: "16px", outline: "none",
              marginBottom: "16px", boxSizing: "border-box", color: "#111"
            }}
            onFocus={(e) => e.target.style.borderColor = "#3b71e8"}
            onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
          />

          {/* Password */}
          <label style={{ display: "block", fontSize: "14px", fontWeight: "500", marginBottom: "6px", color: "#111" }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Min 6 characters"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%", padding: "14px 16px", border: "1.5px solid #d1d5db",
              borderRadius: "8px", fontSize: "16px", outline: "none",
              marginBottom: "24px", boxSizing: "border-box", color: "#111"
            }}
            onFocus={(e) => e.target.style.borderColor = "#3b71e8"}
            onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
          />

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%", padding: "15px",
              backgroundColor: loading ? "#93aef5" : "#1652f0",
              color: "white", border: "none", borderRadius: "100px",
              fontSize: "16px", fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer", marginBottom: "24px"
            }}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>

          {/* OR divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <hr style={{ flex: 1, border: "none", borderTop: "1px solid #e5e7eb" }} />
            <span style={{ fontSize: "14px", color: "#6b7280" }}>OR</span>
            <hr style={{ flex: 1, border: "none", borderTop: "1px solid #e5e7eb" }} />
          </div>

          {/* Google button */}
          <button style={{
            width: "100%", padding: "14px", backgroundColor: "#f3f4f6",
            border: "1px solid #e5e7eb", borderRadius: "100px", fontSize: "16px",
            fontWeight: "600", cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", gap: "12px",
            marginBottom: "12px", color: "#111"
          }}>
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Sign up with Google
          </button>

          {/* Apple button */}
          <button style={{
            width: "100%", padding: "14px", backgroundColor: "#f3f4f6",
            border: "1px solid #e5e7eb", borderRadius: "100px", fontSize: "16px",
            fontWeight: "600", cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", gap: "12px",
            marginBottom: "24px", color: "#111"
          }}>
            <svg width="20" height="20" viewBox="0 0 814 1000">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 405.8 15.6 284.5 15.6 172.1c0-164.8 107.3-252.2 212.7-252.2 56.4 0 103.7 37.2 138.5 37.2 33.4 0 85.5-39.5 149.4-39.5 24 0 108.2 2.5 168.7 74.6zm-126.9-100.7c15.7-20.9 24.6-46.6 24.6-72.9 0-3.8-.3-7.7-.9-11.4-22.8 1-55.4 15.4-73.7 36.9-14.1 16.3-25.3 42-25.3 68.5 0 4.1.6 8.4 1.3 9.7 1.9.3 5.1.6 8.4.6 20.3 0 49.7-13.8 65.6-31.4z"/>
            </svg>
            Sign up with Apple
          </button>

          {/* Sign in link */}
          <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "600", color: "#111", marginBottom: "24px" }}>
            Already have an account?{" "}
            <Link to="/signin" style={{ color: "#1652f0", textDecoration: "none", fontWeight: "600" }}>
              Sign in
            </Link>
          </p>

          {/* Legal */}
          <p style={{ textAlign: "center", fontSize: "13px", color: "#6b7280", lineHeight: "1.5" }}>
            By creating an account you certify that you are over the age of 18 and agree to our{" "}
            <a href="#" style={{ color: "#111", textDecoration: "underline" }}>Privacy Policy</a>
            {" "}and{" "}
            <a href="#" style={{ color: "#111", textDecoration: "underline" }}>Cookie Policy</a>.
          </p>

        </div>
      </main>

      {/* Cookie banner */}
      {!cookieDismissed && (
        <div style={{
          backgroundColor: "#f3f4f6", padding: "16px 24px",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", gap: "16px", flexWrap: "wrap"
        }}>
          <p style={{ fontSize: "14px", color: "#374151", flex: 1, margin: 0 }}>
            We use strictly necessary cookies to enable essential functions, such as security and
            authentication. For more information, see our{" "}
            <a href="#" style={{ color: "#1652f0" }}>Cookie Policy</a>.
          </p>
          <button
            onClick={() => setCookieDismissed(true)}
            style={{
              padding: "10px 20px", backgroundColor: "#1652f0", color: "white",
              border: "none", borderRadius: "8px", fontWeight: "600",
              cursor: "pointer", whiteSpace: "nowrap"
            }}
          >
            Dismiss
          </button>
        </div>
      )}

    </div>
  );
}

export default SignUp;