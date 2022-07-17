import React from "react";
import './MainDash.css'




function MainDash({title, imageUrl, body}) {


  
  return (
    <div>


      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h2> {title}</h2>
          </div>
          <div className="card-body">{body}</div>
        </div>
      </div>
    </div>
  );
}

export default MainDash;
