import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file for styling

function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const getGreeting = async () => {
        if (!name.trim()) {
            setMessage("Please enter a name.");
            return;
        }

        try {
          const response = await axios.get(`https://greeting-app-3.onrender.com/api/greet?name=${name}`);
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error fetching greeting.");
        }
    };

    return (
        <div className="app-container">
            <h2 className="title">Greeting App</h2>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                />
                <button onClick={getGreeting} className="submit-button">Get Greeting</button>
            </div>
            <p className="message">{message}</p>
        </div>
    );
}

export default App;
