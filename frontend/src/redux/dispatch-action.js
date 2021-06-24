import {io} from 'socket.io-client'

const client = io('http://localhost:5000');

export const getAllNumbers = async (dispatch) => {
    await client.on('newNumbers', (numbers) => {
        console.log(numbers.rows)
        dispatch({type: 'GET_ALL_PHONES', numbers: numbers.rows})
    })
}

export const addNumber = () => {
    return async function addNumberNew(dispatch,getState) {
        const number = getState().newPhoneChange
        const code = getState().selectedCountry

        await client.emit('addNumber', {number, code})
        dispatch({type: 'ADD_PHONE'})

    }
}

export const deleteNumber = (id) => {
    return async function onDeleteNumber() {

        await client.emit('deleteNumber', id)
    }
}