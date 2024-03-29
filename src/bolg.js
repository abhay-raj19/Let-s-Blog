import { Link } from "react-router-dom";

const BlogList = ({ blogsdata, title }) => {

    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogsdata.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                  <Link to={`/blog/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                  </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList;