import { useReducer } from "react";
import { validateBooking } from "../utils/validation";
import { useNavigate } from "react-router-dom";

const initialState = {
    fullName: "",
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
    //   availableTimes: ["Select time", "17:00", "18:00", "19:00", "20:00", "21:00"],
    availableTimes: [],
    errors: {},
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state,
                [action.field]: action.value,
            };

        case "SET_AVAILABLE_TIMES":
            return {
                ...state,
                availableTimes: action.payload,
                time: "",
            };

        case "SET_ERRORS":
            return {
                ...state,
                errors: action.payload,
            };

        default:
            return state;
    }
    }

export const getAvailableTimes = (selectedDate) => {
    if (!selectedDate) return []

    const day = new Date(selectedDate).getDate();

    if (day % 2 === 0) {
        return ["17:00", "18:00", "19:00"];
    }

    return ["18:00", "19:00", "20:00", "21:00"];
};

export const useBookingForm = () => {
    const [formData, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target

        dispatch({
            type: "SET_FIELD",
            field: name,
            value,
        })

        if (name === "date") {
            const newTimes = getAvailableTimes(value);

            dispatch({
                type: "SET_AVAILABLE_TIMES",
                payload: newTimes,
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateBooking(formData);

        dispatch({
            type: "SET_ERRORS",
            payload: errors,
        })

        if (Object.keys(errors).length > 0) return;

        // console.log(formData);
        navigate('/confirmed', {state: formData})
    }

    return {
        formData,
        handleChange,
        handleSubmit,
    };
};