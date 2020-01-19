import React, {Component} from "react"
import Preferences from "../containers/Preferences";

class PreferencesPage extends Component {
    render() {
        return (
            <div>
                <h1>Your Preferences</h1>
                <Preferences/>
            </div>
        )
    }
}

export default PreferencesPage