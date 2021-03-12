import axios from "axios"
import { useState } from "react"

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = {"Project-ID": "e2525afc-7536-47f2-8109-b5a80f983409", "User-Name": username, "User-Secret": password}

        try {
            await axios.get("https://api.chatengine.io/chats", {headers: authObject})

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        } catch (error) {
            setError("Oops, incorrect credentials.")
        }
    }

    const handleGuest = async (user, pass) => {

        const authObject = {"Project-ID": "e2525afc-7536-47f2-8109-b5a80f983409", "User-Name": user, "User-Secret": pass}

        try {
            await axios.get("https://api.chatengine.io/chats", {headers: authObject})

            localStorage.setItem('username', user)
            localStorage.setItem('password', pass)

            window.location.reload()
        } catch (error) {
            setError("Oops, incorrect credentials.")
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required
                    />
                    <div align="center">
                        <button type="submit" onclick="handleGuest('guestuser1', 'guest')" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                    <div align="center">
                        <button type="button" onClick={() => {handleGuest("guestuser1", "guest")}} className="button">
                            <span>Enter Chat as Guest 1</span>
                        </button>
                    </div>
                    <div align="center">
                        <button type="button" onClick={() => {handleGuest("guestuser2", "guest")}} className="button">
                            <span>Enter Chat as Guest 2</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm