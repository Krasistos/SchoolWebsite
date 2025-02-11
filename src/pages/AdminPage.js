import { useState } from "react";
import "../styles.css";

function AdminPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(false);

    const handleLogin = () => {
        if (username === "932ue27fhf87fh" && password === "28f9j20fj09jbn38") {
            setAuthenticated(true);
        } else {
            alert("Wrong credentials!");
        }
    };

    return authenticated ? (
        <div>
            <h1>Admin Panel</h1>
            <p>Here you can add, edit, and remove articles.</p>
            {/* Add article management UI here */}
        </div>
    ) : (
        <div>
            <h1>Admin Login</h1>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default AdminPage;
