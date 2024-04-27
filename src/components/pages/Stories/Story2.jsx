import React from 'react'
import { Carousel } from 'react-bootstrap';
import "./Story.css";

function Story2() {

  return (
    <>
      <div className="text-center text-secondary m-5 border border-danger">
        <h1 className="text-center h1 text-success">EDEN MARATHON</h1>
        <p className="text-secondary text-center h3 text-success">October 2022</p>
      </div>

      <div className="row text-center text-secondary m-3 border border-success">
        <div className="col-lg-6">
          <div className="text-center text-secondary p-5 m-5 border border-danger">
            TEXT TEXT TEXT
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-center text-secondary p-lg-5 mx-auto border border-danger w-75">
            <h1>IMAGES</h1>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src="./1marathon22.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src="./2marathon22.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src="./3marathon22.png"
                  alt="third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src="./4marathon22.png"
                  alt="fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
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
              <td className='text-success'>Plymouth Half</td>
              <td>33m 51s</td>
              <td>1:03</td>
              <td>1:33</td>
              <td>2:03</td>
              <td className='text-danger'>2:07</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="table-light">
              <th scope="row">2</th>
              <td>16.10.2022</td>
              <td className='text-success'>Eden Marathon</td>
              <td>41m 16s</td>
              <td>1:20</td>
              <td>1:55</td>
              <td>2:39</td>
              <td></td>
              <td>3:22</td>
              <td>4:13</td>
              <td>5:00</td>
              <td>5:47</td>
              <td className='text-danger'>5:53</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Story2;
