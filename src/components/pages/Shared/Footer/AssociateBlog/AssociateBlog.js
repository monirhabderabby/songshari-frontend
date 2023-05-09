// configuration
import React, { useEffect } from "react";

// components
import CustomHeader from "../../../../shared/CustomHeader/CustomHeader";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import Footer from "../../../../shared/Footer/Footer";
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import BlogCard from "./BlogCard/BlogCard";

const AssociateBlog = () => {
  const blogList = [
    {
      id: 1,
      name: "John King",
      date: "04/09/2024",
      heading: "Make an impression with Complete Profile",
      blogText:
        "Starting your career in today’s hiring environment can be challenging, including making a positive, memorable impression with people who could be your employer. There are several ways you can be proactive to ensure a",
    },
    {
      id: 2,
      name: "John Engram",
      date: "15/02/2024",
      heading: "Make an impression with Special Services",
      blogText:
        "Starting your career in today’s hiring environment can be challenging, including making a positive, memorable impression with people who could be your employer. There are several ways you can be proactive to ensure a",
    },
    {
      id: 3,
      name: "John Sam",
      date: "29/11/2024",
      heading: "Make an impression with Exciting Photos",
      blogText:
        "Starting your career in today’s hiring environment can be challenging, including making a positive, memorable impression with people who could be your employer. There are several ways you can be proactive to ensure a",
    },
    {
      id: 4,
      name: "John Khan",
      date: "09/12/2024",
      heading: "Make an impression with Sharing and Caring",
      blogText:
        "Starting your career in today’s hiring environment can be challenging, including making a positive, memorable impression with people who could be your employer. There are several ways you can be proactive to ensure a very good job",
    },
  ];

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="hidden lg:block">
        <CustomHeader title={"Associate Blog"} />
      </div>
      <div className="lg:hidden">
        <MobileBackButton name={"Associate Blog"} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 my-5 lg:my-12">
        <div>
          {blogList.map((blog) => {
            return <BlogCard key={blog.id} {...{ blog }} />;
          })}
        </div>
      </div>

      <div className="hidden lg:block">
        <Footer />
      </div>
      <div className="lg:hidden">
        <div className="h-16"></div>
        <BottomNav />
      </div>
    </div>
  );
};

export default AssociateBlog;
