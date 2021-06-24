import React from "react";
import './add-phone-number.css'
import DropdownMenu from "../dropdown-menu/dropdown-menu";
import {useDispatch} from "react-redux";
import {addNumber} from "../../redux/dispatch-action";


const AddPhoneNumber = (props) => {
    const {newPhoneChange, isValidPhone} = props.state
    const dispatch = useDispatch()

    const validate = (number) => {
        if (number.length < 3 || number.length > 10) {
            props.isValid({isValid: false, errorText: 'Please enter valid phone number'});
            return
        }
        props.isValid({isValid: true, errorText: ''})
    }


    const onPhoneChange = (e) => {
        const number = e.target.value
        validate(number)
        props.changePhoneNumber(number)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const addNumberNew = addNumber()

        if (isValidPhone.isValid) {
            dispatch(addNumberNew)
        }
    }


    return (
        <div className='add-phone-number d-flex'>
            <div className='drop-menu'>
                <DropdownMenu selectedCountry={props.selectedCountry} state={props.state}/>
            </div>
            <form onSubmit={onSubmit}>
                <input value={newPhoneChange}
                       type='number'
                       className='form-control'
                       onChange={onPhoneChange}/>
                <button className='btn btn-outline-secondary'
                        disabled={!isValidPhone.isValid}>
                    Add number
                </button>
                <div className="text-danger">{isValidPhone.errorText}</div>
            </form>
        </div>
    )
}

export default AddPhoneNumber