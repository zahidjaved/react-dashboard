import React from "react";

const Card = (props) => {
  let { title, descr, imageurl } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://picsum.photos/id/${imageurl}/200/150`}
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descr}</p>
          <a href="/" className="btn btn-sm btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
