import { useState } from "react";

function RegisterForm() {
  // ---------- 1. STATES (React's memory) ----------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [agree, setAgree] = useState(false);

  const [show, setShow] = useState(false);       // show data or not
  const [data, setData] = useState({});          // saved data after submit

  // ---------- 2. FUNCTIONS ----------
  function handleSubmit(e) {
    e.preventDefault();                          // stop page reload
    setData({ name, email, password, city });    // save typed data
    setShow(true);                               // show it
  }

  function handleReset() {
    setName("");
    setEmail("");
    setPassword("");
    setCity("");
    setAgree(false);
    setData({});
    setShow(false);
  }

  // ---------- 3. UI ----------
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Text input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />

        {/* Email input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />

        {/* Password input */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        {/* Dropdown */}
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Chennai">Chennai</option>
        </select>

        {/* Checkbox */}
        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree to Terms & Conditions
        </label>

        {/* Buttons */}
        <button type="submit" disabled={!name || !email || !password || !agree}>
          Submit
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      {/* Live preview (updates while typing) */}
      <p className="live">Live: Hello, {name || "..."}</p>

      {/* Submitted data (appears only after Submit) */}
      {show && (
        <div className="result">
          <h3>Submitted Data</h3>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
          <p>City: {data.city || "Not selected"}</p>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;