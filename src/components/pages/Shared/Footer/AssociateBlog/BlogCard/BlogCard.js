import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="mb-9">
      <h4 className="text-base text-secondary underline font-Poppins font-semibold mb-1 cursor-pointer duration-100 hover:brightness-50">
        {blog.heading}
      </h4>
      <div className="text-[15px] font-light font-Nunito leading-[22px] tracking-wide">
        <p className="">{blog.date}</p>
        <p>{blog.name}</p>
        <p className="lg:w-5/6">{blog.blogText}</p>
      </div>
    </div>
  );
};

export default BlogCard;
