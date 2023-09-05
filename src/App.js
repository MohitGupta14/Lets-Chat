import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () =>{
    return(
        <ChatEngine 
            height = '100vh'
            projectID = "dadc4b6d-9a53-4f07-8030-cee9647a4a90"
            userName = "firefurry"
            userSecret = "12345"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />

    )
}

export default App;