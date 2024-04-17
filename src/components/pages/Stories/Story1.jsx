import React from "react";
import "./Story.css";

function Story1() {

  return (
    <>
      <div className="text-center text-secondary p-5 m-5 border border-danger">
        <h1 className="text-center h1">STORY 1</h1>
        <p className="text-secondary text-center h3">Wellcome to my first page</p>
        <p className="text-secondary text-start ms-5 h4">Text text tetext text text text text text text </p>
      </div>

      <div className="text-center text-secondary m-5 p-lg-5 border border-danger w-75 m-auto">
        <table className="table table-bordered">
          <thead>
            <tr class="table-active">
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Location</th>
              <th scope="col">5K</th>
              <th scope="col">10K</th>
              <th scope="col">15K</th>
              <th scope="col">20K</th>
              <th scope="col">Finish Half</th>
              <th scope="col">25K</th>
              <th scope="col">30K</th>
              <th scope="col">35K</th>
              <th scope="col">40K</th>
              <th scope="col">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-warning">
              <th scope="row">1</th>
              <td>19.06.2022</td>
              <td>Plymouth Half</td>
              <td>33m 51s</td>
              <td>1:03</td>
              <td>1:33</td>
              <td>2:03</td>
              <td>2:07</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=' border border-danger m-5'>
        <img
          className="m-auto mt-2 w-50 rounded img-thumbnail"
          src="./1half22.png"
        />
        <img
          className="m-auto mt-2 w-50 rounded img-thumbnail"
          src="./2half22.png"
        />
        <img
          className="m-auto mt-2 w-50 rounded img-thumbnail"
          src="./3half22.png"
        />
      </div>

    </>
  );
}

export default Story1;
