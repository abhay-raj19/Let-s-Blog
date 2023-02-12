import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Soory..</h2>
            <p>This page does not exists</p>
            <Link to='/'>Return to homepage..</Link>
        </div>
    );
}
 
export default NotFound
