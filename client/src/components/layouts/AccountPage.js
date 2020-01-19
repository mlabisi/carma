import React, {Component} from 'react';
import Account from "../containers/Account"

class AccountPage extends Component {
    render() {
        return (
            <div>
                <div> <h1>My Account</h1> </div>
                <div>
                    <Account/>
                </div>
            </div>
        )
    }
}

export default AccountPage;