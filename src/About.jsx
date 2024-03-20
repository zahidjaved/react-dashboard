import { useRef, useState } from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function About() {
  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Card
                title="first"
                descr="This first card describtion is to be shown"
                imageurl={230}
              />
            </div>
            <div className="col-md-4">
              <Card
                title="first"
                descr="This first card describtion is to be shown"
                imageurl={228}
              />
            </div>
            <div className="col-md-4">
              <Card
                title="first"
                descr="This first card describtion is to be shown"
                imageurl={211}
              />
            </div>
             {Sdata.map((dataa)=>{
              const {name , email, roll , id} = dataa
                  return(
                    
            <div className="col-md-4" key={id}>
            <div className="card my-5 text-center">
              <div className="card-body">
                 <h2>{name}</h2>
                 <p>{email}</p>
                 <p>{roll}</p>
              </div>
            </div>
          </div>
                  )
             })}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
