import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import blogsData from '../data'

const truncateString = (str, num) => {
    if(str.length > num) {
        return str.slice(0, num) + "..."
    }else{
        return str;
    }
}

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData) 
    return (
        <section>
            {
                blogs.map((blog) => {
                    const {id, title, body} = blog;
                    return ( 
                        <article key={id}>
                            <h1>{title}</h1>
                            <p>{truncateString(body, 250)}</p>
                            <Link to={title} state={{id, title, body}} >Learn More</Link>
                        </article>
                    )
                })
            } 
        </section>
    );
};

export default Blogs;