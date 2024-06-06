import React from "react";
import "./Blog.css";
import nosy from "../../assets/nosy.webp";
import esteem from "../../assets/sel-esteem.webp";

const Blog = () => {
  return (
    <div className="blogs">
      <div className="blog">
        <img src={nosy} alt="" className="img-1" />
        <div className="blog-content">
          <h2>Nosy Neighbors</h2>
          <p>
            I grew up in a flat where everyone Is curious about one and other.
            Growing up used to be fun,until I graduated high school Then it took
            a turn, Everyone was inquisitive about my stay back, Nosy neighbor
            started what they do best. They were curious about what was holding
            me back While my mates were in school. “Pretending like they care,
            they call me …{" "}
            <a href="https://busolamidiary.wordpress.com/2021/02/14/nosy-neighbors/">
              <b>Continue reading</b>
            </a>
          </p>
        </div>
      </div>
      <div className="blog blog-space">
        <img src={esteem} alt="" className="img-2" />
        <div className="blog-content">
          <h2>Self Esteem</h2>
          <p>
            Beautiful people,welcome to Busolami’s diaryI’m writing this with so
            much exictment in my heart,Thanks for catching up on the last week
            episode of Busolami’s diary as I got so many reviews which I
            channelled to today’s episode.Thanks to everyone who shared my blog
            post and are still sharing. I really appreciate.Anyways,I bring you
            today’s episode titled; SELF ESTEEM I wanted to be perfect like
            everyone,Not …{" "}
            <a href="https://busolamidiary.wordpress.com/2021/02/21/self-esteem/">
              <b>Continue reading</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
