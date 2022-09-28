import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <div className="blog-details">
        {error && (
          <h1
            style={{
              color: "skyblue",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            {error}
          </h1>
        )}
        {isPending && (
          <h1
            style={{
              color: "skyblue",
              fontSize: "3rem",
            }}
          >
            Loading...
          </h1>
        )}
        {blog && (
          <>
            <article>
            <Link to="/" className="back-link">
              Go back
            </Link>
              <h1>{blog.title}</h1>
              <p>- Written by {blog.author}</p>
              <span className="blog-body">{blog.body}</span>
              <button onClick={handleDelete} className="delete-btn">
                delete blog
              </button>
            </article>
          </>
        )}
      </div>
    </>
  );
};

export default BlogDetail;
