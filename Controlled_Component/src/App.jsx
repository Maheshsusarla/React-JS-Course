// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <p>Hello, {name}</p>
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div>
//       <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//       <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//       <button disabled={!email || !password}>Login</button>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//       <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//       <button onClick={() => setShow(true)}>Submit</button>

//       {show && <p>{email} / {password}</p>}
//     </div>
//   );
// }

// export default App;


import { useState } from "react";

function App() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [show, setShow] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setShow(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                <input name="password" value={form.password} onChange={handleChange} placeholder="Password" />
                <button type="submit">Submit</button>
            </form>

            {show && (
                <div>
                    <p>Name: {form.name}</p>
                    <p>Email: {form.email}</p>
                    <p>Password: {form.password}</p>
                </div>
            )}
        </div>
    );
}

export default App;