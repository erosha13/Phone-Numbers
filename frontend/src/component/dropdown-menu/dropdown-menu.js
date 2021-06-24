import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";

const DropdownMenu = (props) => {

    const selectedCountry = (value) => {
        props.selectedCountry(value)
    }

    const renderDropDown = props.state.countryCode.map((item) => {
            return (
                <Dropdown.Item  onClick={() => selectedCountry(item.value)} key={item.id}>
                    {item.value} ({item.label})
                </Dropdown.Item>
            )
        }
    )
    return (
        <DropdownButton
            variant='btn btn-outline-info'
            title={props.state.selectedCountry}>
            {renderDropDown}
        </DropdownButton>
    )

}

export default DropdownMenu

