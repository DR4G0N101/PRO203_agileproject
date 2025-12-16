import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./login.css";

import Logo from "../../assets/Logo.png";
import data from "../../data/dummy.json";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    if (data && data.departments) {
      setDepartments(data.departments);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Innlogging forsøkt (ansatt)");
  };

  return (
    <div className="parent-login-container">

      {/* Tilbake-link */}
      <div className="top-admin-link">
        Tilbake til{" "}
        <Link to="/" className="underline hover-link">
          hovedsiden
        </Link>
      </div>

      {/* Logo + Ansatt */}
      <div className="logo-block">
        <img src={Logo} alt="Krysselista logo" className="parent-logo" />
        <h2 className="ansatt-title">Ansatt</h2>
      </div>

      <div className="login-card">

        {/* E-post */}
        <div className="input-wrapper">
          <span className="input-icon">✉️</span>
          <input
            type="email"
            placeholder="E-post"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Passord */}
        <div className="input-wrapper">
          <span className="input-icon">🔒</span>
          <input
            type="password"
            placeholder="Ditt passord"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Barnehagevalg */}
        <div className="input-wrapper">
          <select
            className="input-field"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">Velg barnehage</option>
            {departments.map((dep) => (
              <option key={dep.departmentId} value={dep.departmentId}>
                {dep.name}
              </option>
            ))}
          </select>
        </div>

        {/* Logg inn */}
        <Link to="/home">
          <button className="btn-primary">Logg inn</button>
        </Link>
        
        {/* Glemt passord */}
        <Link to="/forgot-password" className="forgot-link hover-link">
          Glemt passord
        </Link>
      </div>
    </div>
  );
}
