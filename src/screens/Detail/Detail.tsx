import { Poem } from "../../types/poems";
import "./detail.css";



const Detail = () => {

  

  const content = "Why is this not rendering? ..... 😅";

  return (
    <div className="detail">
      <button className="back-button" onClick={()=> console.log("Back button clicked")}>
        &larr; Back
      </button>
      <h1 className="title">{title}</h1>
      <h2 className="author">By {author}</h2>
      <div className="content">{content}</div>
      <p className="lines">{linecount}</p>
    </div>
  );
};

export default Detail;
