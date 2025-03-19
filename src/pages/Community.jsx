import { useState } from "react";
import Post from "../components/common/community/post/Post";
import SideBar from "../components/common/community/side-bar/SideBar";
import AddPost from "../components/common/community/add-post/AddPost";

const posts = [
  {
    profileImage: "/src/assets/me.jpg", // صورتك الشخصية
    username: "Me",
    timeAgo: "Just now",
    content: "Excited to be working on my new project! 🚀",
    postImage:
      "http://www.mountainphotography.com/images/xl/20100923-Capitol-Sunset.jpg",
  },
  {
    profileImage: "/src/assets/me.jpg", // صورتك الشخصية
    username: "Alice Johnson",
    timeAgo: "30 minutes ago",
    content: "Just finished reading an amazing book! 📖 Highly recommend it.",
    postImage:
      "https://tse4.mm.bing.net/th?id=OIP.IU0dBIT-RUIwj4J94xaXzQHaEm&pid=Api&P=0&h=220",
  },
  {
    profileImage: "/src/assets/me.jpg", // صورتك الشخصية
    username: "John Doe",
    timeAgo: "1 hour ago",
    content: "Had a great time hiking today! The view was breathtaking.",
    postImage:
      "https://tse4.mm.bing.net/th?id=OIP._LFnuIdeVajFLjyF6ZwuOQHaE7&pid=Api&P=0&h=220",
  },
  {
    profileImage: "/src/assets/me.jpg", // صورتك الشخصية
    username: "Emily Carter",
    timeAgo: "2 hours ago",
    content: "Enjoying a cup of coffee on this rainy evening. ☕🌧️",
    postImage:
      "https://tse2.mm.bing.net/th?id=OIP.WkLjIAYIyZCXq0QpfdsQ0QHaHa&pid=Api&P=0&h=220",
  },
  {
    profileImage: "/src/assets/me.jpg", // صورتك الشخصية
    username: "Michael Brown",
    timeAgo: "3 hours ago",
    content: "Coding late at night is the best time for creativity! 💻✨",
    postImage:
      "https://tse3.mm.bing.net/th?id=OIP.t9RxpyYqIqCJFboZho_y7wHaFj&pid=Api&P=0&h=220",
  },
  {
    profileImage: "/src/assets/me.jpg", // صورتك الشخصية
    username: "Sophia Lee",
    timeAgo: "5 hours ago",
    content: "The sunset today was absolutely stunning! 🌅",
    postImage:
      "https://tse2.mm.bing.net/th?id=OIP.WkLjIAYIyZCXq0QpfdsQ0QHaHa&pid=Api&P=0&h=220",
  },
];

export default function Community() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="gap-3 d-flex">
      <SideBar />
      <div className="flex-grow-1 community-content">
        <div className="py-4 container-fluid">
          <div className="mb-4 post-form-container position-relative">
            <button
              type="button"
              className={`btn btn-primary rounded-pill new-post-btn  ${
                isOpen ? "active rotate" : ""
              }`}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              New ➕
            </button>
            <div className={`post-form-wrapper ${isOpen ? "show" : ""}`}>
              {isOpen && <AddPost />}
            </div>
          </div>

          <div className="pt-3 mx-auto mx-md-0 posts-container row flex-column ">
            {posts.map((post, index) => (
              <div key={index} className="">
                <Post {...post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
