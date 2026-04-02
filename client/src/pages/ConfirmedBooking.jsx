import { useNavigate } from "react-router-dom";

const ConfirmedBooking   = () => {
    const navigate = useNavigate()

    return ( 
        <>
            <h1>im ConfirmedBooking </h1>
            <button onClick={() => navigate('/')}>Home</button>

        </>
     );
}
 
export default ConfirmedBooking ;