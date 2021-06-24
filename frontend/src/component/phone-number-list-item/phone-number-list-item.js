import React from "react";
import './phone-number-list-item.css'
import {deleteNumber} from "../../redux/dispatch-action";
import {useDispatch} from "react-redux";

const PhoneNumberListItem = (props) => {

    const dispatch = useDispatch()

    const {phoneNumber, id, code} = props

    const onDelete = () => {
        const onDeleteNumber = deleteNumber(id)
        dispatch(onDeleteNumber)
    }

    return (
        <div className='phone-number-list-item'>
            <span>
                {code}
                {phoneNumber}
            </span>
            <button onClick={onDelete}
                    type='button'
                    className='btn btn-outline-primary btn-sm float-right'>
                <i className="fas fa-phone-slash"/>
            </button>
        </div>
    )
}

export default PhoneNumberListItem