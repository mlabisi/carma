import React, {Component} from "react"
import Likes from "../containers/Likes";

class LikesPage extends Component {
    render() {
        return (
            <div>
                <h1>My Likes</h1>
                    <Likes/>
            </div>
        )
    }
}

export default LikesPage