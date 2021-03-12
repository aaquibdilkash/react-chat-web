import {ChatEngine} from "react-chat-engine"

import LoginForm from "./components/LoginForm"
import ChatFeed from "./components/ChatFeed"

import "./App.css"

const App = () => {

    if(!localStorage.getItem("username")) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="e2525afc-7536-47f2-8109-b5a80f983409"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }

        />
    )
}

export default App