import React from "react";
import "./Story.css";

function Story1() {

  return (
    <>
      <h1 className="text-primary text-center h1">STORY 1</h1>
      <p className="text-secondary text-center h3">Wellcome to my empty page</p>
     <p className="text-secondary text-start ms-5 h4">Text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
     <div className=' border border-dark'>
                <img href='/#run2022'
                  src="./run1.png run2.png"
                  text="First Official Half Marathon - June 2022"
                />
                <a href='/#run2022'
                  src='run2.png'
                  text='First Marathon - October 2022'
                  path='story2'
                />
          </div>
    </>
  );
}

export default Story1;
