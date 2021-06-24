import React from "react";
import './app.css'
import PhoneNumberListContainer from "../phone-number-list/phone-number-list-container";
import AddPhoneNumberContainer from "../add-phone-number/add-phone-number-container";

const App = () => {


    return (
        <div className='phone-app container d-flex'>
            <div className='add-phone-panel'>
                <AddPhoneNumberContainer/>
            </div>
            <div className='phone-number-panel'>
                <PhoneNumberListContainer/>
            </div>
        </div>
    )
}

export default App



