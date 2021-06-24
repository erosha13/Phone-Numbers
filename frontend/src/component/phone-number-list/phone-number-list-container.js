import PhoneNumberList from "./phone-number-list";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state
    }
}


const PhoneNumberListContainer = connect(mapStateToProps)(PhoneNumberList)

export default PhoneNumberListContainer