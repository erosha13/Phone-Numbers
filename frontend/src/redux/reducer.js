const initialState = {
    phoneList: [],
    countryCode: [
        {value: '+7 ', label: ' Russia ', id: 1},
        {value: '+4 ', label: ' Wakanda ', id: 2},
        {value: '+6 ', label: ' Atlantis ', id: 3},
    ],
    selectedCountry: '+7 ',
    newPhoneChange: '',
    isValidPhone: {isValid: false, errorText: ''}
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ALL_PHONES':
            return {
                ...state,
                phoneList: [
                    ...action.numbers,
                ]
            }

        case 'PHONE_CHANGE':
            return {
                ...state,
                newPhoneChange: action.value
            }

        case 'ADD_PHONE':
            const phoneWithCountry = state.selectedCountry + state.newPhoneChange
            return {
                ...state,
                phoneList: [
                    ...state.phoneList,
                    {number: phoneWithCountry, id: idx++}
                ],
                newPhoneChange: '',
                isValidPhone: {
                    ...state.isValidPhone,
                    isValid: false,
                    errorText: ''
                }
            }

        case 'DELETE_PHONE':

            return {
                ...state,
                phoneList: state.phoneList.filter(item =>  item.id !== action.id)
            }

        case 'CHANGE_SELECTED_COUNTRY':
            return {
                ...state,
                selectedCountry: action.selectedCountry
            }

        case 'CHANGE_VALID':
            return {
                ...state,
                isValidPhone: {
                    ...state.isValidPhone,
                    isValid: action.isValidInfo.isValid,
                    errorText: action.isValidInfo.errorText
                }
            }

        default:
            return state
    }

}

export default reducer

let idx = 1;
