import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-page">
      {/* <h1>Blogs</h1> */}
      <BlogCard
        title={`Mastering Git: A Comprehensive Cheat Sheet for Beginners and Beyond`}
        link={
          "https://medium.com/@vineetsatya36/mastering-git-a-comprehensive-cheat-sheet-for-beginners-and-beyond-65c8411ac346"
        }
      />
      <BlogCard
        title={`Deep Dive into Functional Programming: Enhancing Code Efficiency and Reliability`}
        link={
          "https://medium.com/@vineetsatya36/deep-dive-into-functional-programming-enhancing-code-efficiency-and-reliability-3a8cb23ab85f"
        }
      />
      <BlogCard
        title={`Unleashing the Power of LangChain: A Comprehensive Guide`}
        link={
          "https://medium.com/@vineetsatya36/unleashing-the-power-of-langchain-a-comprehensive-guide-4efa6d68ecde"
        }
      />
      <BlogCard
        title={`Exploring the Perfect Match of Generative AI and Streamlit`}
        link={
          "https://medium.com/@vineetsatya36/exploring-the-perfect-match-of-generative-ai-and-streamlit-4749aef6e4c3"
        }
      />
      <BlogCard
        title={`Unleashing Creativity with Sora: Exploring OpenAI’s Revolutionary Text-to-Video Generation API`}
        link={
          "https://medium.com/@vineetsatya36/unleashing-creativity-with-sora-exploring-openais-revolutionary-text-to-video-generation-api-376e308fd887"
        }
      />
      <BlogCard
        title={`Simple Splash Screen in Flutter:`}
        link={
          "https://medium.com/@vineetsatya36/simple-splash-screenin-flutter-5b17714bb32a"
        }
      />
    </div>
  );
};

export default Blogs;

export const BlogCard = ({ title, link }) => {
  return (
    <div className="blog-container">
      <h1>{title}</h1>
      <a href={link} target="_blank">
        Read more ...
      </a>
    </div>
  );
};
