import { Link } from "react-router-dom";



const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-center text-5xl font-bold text-red-700">Opps</h1>
            <Link className="text-center" to="/">Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;