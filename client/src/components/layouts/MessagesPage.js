import React, {Component} from 'react';
import Messages from "../containers/Messages"

class MessagesPage extends Component {
    render() {
        return (
            <div>
                <div> <h1>My Messages</h1> </div>
                <div>
                    <Messages/>
                </div>
            </div>
        )
    }
}

export default MessagesPage;