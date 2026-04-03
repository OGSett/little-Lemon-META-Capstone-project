import { useNavigate } from "react-router-dom";



export const useBookingNavigation = () => {
    const navigate = useNavigate()

    const goToBooking = () => {
        navigate('/booking')
    }
    return {goToBooking}
}