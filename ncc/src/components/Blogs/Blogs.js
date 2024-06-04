import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import './Blogs.css';

export default function Blogs() {
    const blogs = [
        {
            href: "./blog-aj",
            imgSrc: "/images/blogs/ajBlog.jpg",
            author: "Abhishek Jha",
            title: "NCC IITR in Pre-Pandemic Days"
        },
        {
            href: "./blog-vm",
            imgSrc: "/images/blogs/vm.jpg",
            author: "Varun Mishra",
            title: "Role of NCC in Social Life"
        },
        {
            href: "./blog-ca",
            imgSrc: "/images/blogs/general.jpg",
            author: "Chayan Ailawalia",
            title: "The Silent Pillars of Indian Army"
        },
        {
            href: "./blog-rs",
            imgSrc: "/images/blogs/rs.jpg",
            author: "Rohini Shrivastava",
            title: "Technological Advancements in the\nIndian Army"
        }
    ];


    return (
        <div id="list" class="container d-flex flex-wrap p-0 justify-content-evenly blogList">
            {blogs.map((blog, index) => (
                <div className="p-2 blogBox" key={index}>
                    <div className="ncc-bg-blue blogBig">
                        <Link to={blog.href}>
                            <div className="blogImg">
                                <img src={blog.imgSrc} className="blogImg-mobile mobileSmall" alt={`${blog.title} by ${blog.author}`} />
                                <div className="ncc-white authorSmall" style={{ backgroundImage: `url(${blog.imgSrc})` }}>
                                    <span className="details m-2 px-2">
                                        <p>By: <span>{blog.author}</span></p>
                                    </span>
                                </div>
                            </div>
                            <div className="ncc-bg-blue px-3 pt-3 pb-3 ncc-white blogTitleSmall">
                                {blog.title.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        <span>{line}</span>
                                        {i < blog.title.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                                <p className="by">By: <span>{blog.author}</span></p>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}