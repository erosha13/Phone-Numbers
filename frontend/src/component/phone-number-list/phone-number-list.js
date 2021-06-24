import React from "react";
import PhoneNumberListItem from "../phone-number-list-item/phone-number-list-item";


const PhoneNumberList = (props) => {
    if (!props.state.phoneList) {
        return
    }
    const renderItems = props.state.phoneList.map((item) => {
        return (
            <li key={item.id} className='list-group-item'>
                <PhoneNumberListItem phoneNumber={item.number}
                                     code={item.code}
                                     id={item.id}/>
            </li>
        )
    })

    return (
        <ul className='list-group'>
            {renderItems}
        </ul>
    )
}

export default PhoneNumberList