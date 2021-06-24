import {connect} from "react-redux";
import AddPhoneNumber from "./add-phone-number";

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePhoneNumber: (label) => dispatch({type: 'PHONE_CHANGE', value: label}),
        addPhone: () => dispatch({type: 'ADD_PHONE'}),
        selectedCountry: (selectedCountry) => {
            dispatch({type: 'CHANGE_SELECTED_COUNTRY', selectedCountry: selectedCountry})
        },
        isValid: (isValidInfo) => dispatch({type: 'CHANGE_VALID', isValidInfo: isValidInfo})
    }
}

const AddPhoneNumberContainer = connect(mapStateToProps, mapDispatchToProps)(AddPhoneNumber)

export default AddPhoneNumberContainer