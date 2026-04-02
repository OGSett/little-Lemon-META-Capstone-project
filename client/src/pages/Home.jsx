import { useNavigate } from "react-router-dom";

const Home  = () => {
    const navigate = useNavigate()
    return ( 
        <>
            <h1>im HomePage</h1>
            <button onClick={() => navigate('/booking')}>Booking</button>
        </>
     );
}
 
export default Home ;