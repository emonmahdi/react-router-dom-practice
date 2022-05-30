import React  from "react";
import { useLocation, useParams } from "react-router-dom"; 

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();
  // const [bodyText, setBodyText] = useState("")

  // useEffect( () => {
  //    const blogData =  blogsData.filter((blog) => blog.title === title);
  //     setBodyText(blogData[0].body)
  // }, [])
  return (
    <div>
      <h2>{title} Page</h2>
      <p>{location.state.body.slice(0, 400)}</p>
      <p>{location.state.body.slice(401, 800)}</p>
    </div>
  );
};

export default Blog;
