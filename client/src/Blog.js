import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";

const Blog = () => {
  // Step 2: Define a state variable
  const [showFullContent, setShowFullContent] = useState(false);

  // Step 3: Event handler function to toggle the state
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <Wrapper>
      <div className="container ">
        <h1 className="blog_title title">Blog</h1>
        <div className="blog grid grid-two-column" id="blog">
          <div className="blog_post">
            <h2 className="blog_post_title">The Art of Pottery</h2>
            <img
              src="https://cdn.pixabay.com/photo/2016/01/13/23/12/clay-1139098_1280.jpg"
              alt="Pottery Art"
            />
            <p className="blog_content">
              Pottery is a beautiful and ancient craft that involves shaping
              clay into intricate forms.
            </p>
            <Button className="summary_button" onClick={toggleContent}>
              {showFullContent ? "Show Summary" : "Show Full Post"}
            </Button>
            <div className={`full_content ${showFullContent ? "show" : ""}`}>
              <p>
                Pottery is one of the oldest crafts practiced by artisans
                worldwide. It involves molding clay into various shapes and
                forms, which are then fired to create durable and often
                decorative items. From simple clay pots to intricately designed
                vases, pottery showcases the skill and creativity of artisans.
              </p>
              <p>
                Artisans who specialize in pottery use a range of techniques,
                including hand-building, wheel-throwing, and glazing, to craft
                their unique pieces. The final product can be both functional
                and aesthetically pleasing, making pottery a timeless and
                cherished art form.
              </p>
            </div>
          </div>

          <div className="blog_post">
            <h2 className="blog_post_title">
              Bidriware: The Craft of Metal Inlay
            </h2>
            <img
              src="https://imgs.search.brave.com/Ln1NTySGlM-nCMkKiWx4_ClEncrRv35tdWfL4OwRKgM/rs:fit:860:0:0/g:ce/aHR0cDovL2Nkbi5z/aG9waWZ5LmNvbS9z/L2ZpbGVzLzEvMDY5/NS8zMDc1L2ZpbGVz/L0NvbGxhZ2VfRm90/b3JfZ3JhbmRlLmpw/Zz82MzQyMjM3NDY0/MTgzMjQwMDU1"
              alt="Bidriware Art"
            />
            <p className="blog_content">
              Bidriware is an ancient metalwork craft known for its intricate
              silver inlay work on blackened metal surfaces.
            </p>
            <Button className="summary_button" onClick={toggleContent}>
              {showFullContent ? "Show Summary" : "Show Full Post"}
            </Button>
            <div className={`full_content ${showFullContent ? "show" : ""}`}>
              <p>
                Bidriware is a traditional metal handicraft that originated in
                the city of Bidar, Karnataka, India. This art form involves
                creating intricate designs on metal, typically using a
                combination of zinc and copper, and then treating it with a
                special oxidizing process to achieve a distinct black color.
              </p>
              <p>
                The artisans create exquisite pieces, including vases, trays,
                jewelry boxes, and more. Bidriware is celebrated for its
                delicate silver inlay work that adorns the blackened metal
                surface, resulting in stunning and unique creations.
              </p>
            </div>
          </div>

          <div className="blog_post">
            <h2 className="blog_post_title">Sarees: Elegance in Six Yards</h2>
            <img
              src="https://imgs.search.brave.com/yvSkAUpMRuLcb-LXtVJvJNgJfOZewAWdwUPivoPhCtI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IyL015c29yZV9T/aWxrX1NhcmVlLmpw/Zw"
              alt="Sarees"
            />
            <p className="blog_content">
              The saree is a timeless Indian garment known for its grace and
              beauty, with a rich history spanning centuries.
            </p>
            <Button className="summary_button" onClick={toggleContent}>
              {showFullContent ? "Show Summary" : "Show Full Post"}
            </Button>
            <div className={`full_content ${showFullContent ? "show" : ""}`}>
              <p>
                Saree, the traditional attire of Indian women, is much more than
                just clothing; it's a symbol of grace and tradition. This
                six-yard wonder has a rich history and cultural significance
                across the diverse regions of India.
              </p>
              <p>
                The art of weaving sarees is an intricate process, with various
                regions of India producing their unique styles and patterns.
                From the Banarasi silk sarees to the vibrant Kanjivarams of
                South India, each saree is a piece of art that reflects the
                heritage of its origin.
              </p>
            </div>
          </div>

          <div className="blog_post">
            <h2 className="blog_post_title">
              Wooden Toys: Craftsmanship for Kids
            </h2>
            <img
              src="https://imgs.search.brave.com/GoMwbO8uNOYOieBuiu4bXQD-Cbz5hjcO-miBF87idqc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1LzYw/LzRkLzg1NjA0ZDJl/ZWMxYWQ2NDc3ODBj/OTVkMjIwNzI5OTFh/LS1teXNvcmUta2Fy/bmF0YWthLmpwZw"
              alt="Wooden Toys"
            />
            <p className="blog_content">
              Indian wooden toys are not just playthings; they are a blend of
              tradition, artistry, and eco-friendliness.
            </p>
            <Button className="summary_button" onClick={toggleContent}>
              {showFullContent ? "Show Summary" : "Show Full Post"}
            </Button>
            <div className={`full_content ${showFullContent ? "show" : ""}`}>
              <p>
                Wooden toys have been an integral part of Indian childhood for
                generations. Crafted by skilled artisans, these toys are made
                from natural materials, making them safe and eco-friendly.
              </p>
              <p>
                From the famous Channapatna toys of Karnataka to the traditional
                Kondapalli toys of Andhra Pradesh, each region in India has its
                unique style of crafting wooden toys. These toys not only
                entertain but also serve as a testament to the rich heritage of
                Indian craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 7rem 0;
  height: auto;

  .blog_title {
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
    padding: 20px 0;
    font-size: ${({ theme }) => theme.font.biggest};
    font-weight: ${({ theme }) => theme.fontWeight.SemiBold};
    color: ${({ theme }) => theme.colors.black};
  }

  .blog_posts {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: ${({ theme }) => theme.shadow.boxShadow};
  }

  .blog_post {
    height: max-content;
    background-color: ${({ theme }) => theme.colors.white};
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 20px; /* Add padding here */
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center; /* Center text content */
  }
  .blog_post:last-child {
    margin-bottom: 0;
  }

  .blog_post_title {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .blog_content {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  .grid {
    gap: 2rem;
  }
  .summary_button {
    background-color: ${({ theme }) => theme.colors.first};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
  }

  .full_content {
    display: none;
  }

  .full_content.show {
    display: block;
  }
  .blog_post img {
    width: 100%;
    height: 50%;
    display: block;
    margin: 0 auto; /* Center the images */
  }
`;

export default Blog;
