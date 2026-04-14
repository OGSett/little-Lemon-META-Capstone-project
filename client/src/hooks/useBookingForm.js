import { useReducer } from "react";
import { validateBooking } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../utils/bookingApi";

const initialState = {
    fullName: "",
    date: "",
    time: "",
    guests: '1',
    isSubmitting: false,
    occasion: "",
    errors: {},
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            const updatedErrors = { ...state.errors }
            delete updatedErrors[action.field]

            return {
                ...state,
                [action.field]: action.value,
                errors: updatedErrors,
            };
        case 'SET_ERRORS':
            return {
                ...state,
                errors: action.payload,
            };
        case 'SET_SUBMITTING':
            return {
                ...state,
                isSubmitting: action.payload,
            }
        default:
            return state;
    }
}

export const initializeTimes = () => {
    return fetchAPI(new Date())
}

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(action.date)
        default:
            return state
    }
}


export const useBookingForm = () => {
    const [formData, dispatch] = useReducer(reducer, initialState)
    const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes)
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target


        dispatch({
            type: "SET_FIELD",
            field: name,
            value,
        })

        if (name === "date") {
            dispatch({
                type: 'SET_FIELD',
                field: 'time',
                value: '',

            })
            dispatchTimes({
                type: 'UPDATE_TIMES',
                date: value,
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateBooking(formData);

        dispatch({
            type: "SET_ERRORS",
            payload: errors,
        })

        if (Object.keys(errors).length > 0) return;

        dispatch({ type: 'SET_SUBMITTING', payload: true, })
        const success = await submitAPI(formData)
        if (success) {
            const { errors, isSubmitting, ...cleanData } = formData
            navigate('/confirmed', { state: cleanData })
            return
        }
        dispatch({ type: 'SET_SUBMITTING', payload: false, })
    }

    return {
        formData,
        handleChange,
        handleSubmit,
        availableTimes,
        isSubmitting: formData.isSubmitting,
    };
};