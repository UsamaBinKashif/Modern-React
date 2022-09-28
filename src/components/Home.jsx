import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
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
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
