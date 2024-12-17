import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const ReusableCard = () => {
  const cardInfo = [
    {
      cardImage:
        "https://ih1.redbubble.net/image.815350031.4911/st,small,845x845-pad,1000x1000,f8f8f8.u1.jpg",
      cardTitle: "JavaScript",
      cardDescription:
        "JavaScript is a high-level, dynamic programming language primarily used for creating interactive and dynamic content on websites. ",
    },
    {
      cardImage:
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_170805.png",
      cardTitle: "React JS",
      cardDescription:
        "React JS is a popular open-source JavaScript library for building user interfaces, particularly single-page applications.",
    },
    {
      cardImage:
        "https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format,compress",
      cardTitle: "Next JS",
      cardDescription:
        "Next JS is a React-based framework for building server-side rendered (SSR) and static websites.",
    },
    {
      cardImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      cardTitle: "Node JS",
      cardDescription:
        " Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling JavaScript to be used for server-side programming.",
    },
    {
      cardImage:
        "https://www.loginradius.com/blog/static/504642ca3a1f7d78dea8509436faa4c6/701ee/cover.jpg",
      cardTitle: "MongoDB",
      cardDescription:
        "MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like formats.",
    },
  ];

  return (
    <div className="my-4">
      
      <div className="my-4 flex flex-wrap justify-center gap-4">
        {cardInfo.map((card, index) => (
          <Card
            key={index}
            cardImage={card.cardImage}
            cardTitle={card.cardTitle}
            cardDescription={card.cardDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default ReusableCard;
