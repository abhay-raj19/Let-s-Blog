import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const{data:blogs,isPending,error} = useFetch(" http://localhost:8000/blogs/" + id);

    const navigate = useNavigate();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blogs.id , {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        });
    }



    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blogs && (
                <article>
                    <h1>{blogs.title}</h1>
                    <p>Written by { blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;