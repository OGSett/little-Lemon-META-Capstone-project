import { useNavigate } from "react-router-dom";

const BookingPage  = () => {
    const navigate = useNavigate()

    return ( 
        <>
            <h1>im BookingPage</h1>
            <button onClick={() => navigate('/confirmed')}>Confirm</button>

        </>
     );
}
 
export default BookingPage ;