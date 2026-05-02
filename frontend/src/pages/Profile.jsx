import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/common";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(() => {
  const stored = localStorage.getItem("user");
  if (!stored) {
    navigate("/signin");
    return;
  }
  setUser(JSON.parse(stored));
  setLoading(false);
}, [navigate]);

 const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/signin");
};

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ fontSize: "16px", color: "#6b7280" }}>Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ fontSize: "16px", color: "#dc2626" }}>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>
      <header style={{ padding: "16px 24px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/">
          <Logo size={22} />
        </Link>
        <button
          onClick={handleLogout}
          style={{ padding: "10px 20px", backgroundColor: "#f3f4f6", border: "1px solid #e5e7eb", borderRadius: "100px", fontSize: "14px", fontWeight: "600", cursor: "pointer", color: "#111" }}
        >
          Log out
        </button>
      </header>

      <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 20px" }}>
        <div style={{ width: "100%", maxWidth: "480px" }}>

          <div style={{ width: 80, height: 80, borderRadius: "50%", backgroundColor: "#1652f0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "32px", fontWeight: "700", color: "white" }}>
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h1 style={{ fontSize: "26px", fontWeight: "700", textAlign: "center", marginBottom: "8px", color: "#111" }}>
            {user?.name}
          </h1>

          <p style={{ textAlign: "center", fontSize: "15px", color: "#6b7280", marginBottom: "40px" }}>
            {user?.email}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            <div style={{ padding: "20px 24px", backgroundColor: "#f8f9fa", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Full Name</div>
              <div style={{ fontSize: "16px", fontWeight: "600", color: "#111" }}>{user?.name}</div>
            </div>

            <div style={{ padding: "20px 24px", backgroundColor: "#f8f9fa", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Address</div>
              <div style={{ fontSize: "16px", fontWeight: "600", color: "#111" }}>{user?.email}</div>
            </div>

            <div style={{ padding: "20px 24px", backgroundColor: "#f8f9fa", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Member Since</div>
              <div style={{ fontSize: "16px", fontWeight: "600", color: "#111" }}>
                {new Date(user?.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </div>
            </div>

            <div style={{ padding: "20px 24px", backgroundColor: "#f8f9fa", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Account ID</div>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#111", wordBreak: "break-all" }}>{user?.id}</div>
            </div>

          </div>

          <p style={{ textAlign: "center", fontSize: "12px", color: "#9ca3af", marginTop: "32px" }}>
            Educational demo only. Do not use real personal information.
          </p>

        </div>
      </main>

    </div>
  );
}

export default Profile;