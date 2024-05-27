import React from 'react'
import { Carousel } from 'react-bootstrap';

function Story6() {

  return (
    <>
      <div className="text-center text-secondary mt-5">
        <h1 className="text-center h1">EXETER MARATHON</h1>
        <h2 className="text-secondary text-center h3">May 2024</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-center text-secondary h5 p-5 m-5 border border-secondary">
              <p>
                Four months before this marathon, I started my training and ran around 500 km.
                The closer I got to marathon day, the more prepared I felt.
                A few days before the run, I came down with a very bad cold. DISAPPOINTMENT.
                I decided to go even if I had to walk the entire marathon.
                In the end, I managed to finish with almost the same time as last year.
                By far, this was the hardest run I've ever done.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-10 mx-auto">
            <div className="text-center text-secondary p-lg-5 mx-auto w-75">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src="./2Exeter24.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src="./3Exeter24.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src="./4Exeter24.png"
                    alt="third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src="./5Exeter24.png"
                    alt="fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src="./6Exeter24.png"
                    alt="third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src="./7Exeter24.png"
                    alt="third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded"
                    src="./8Exeter24.png"
                    alt="third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="table-responsive text-center text-secondary p-lg-5 p-md-5 pt-5 mt-5 m-2 w-90">
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
            <tr class="table-success">
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
            <tr class="table-info">
              <th scope="row">3</th>
              <td>14.05.2023</td>
              <td className='text-success'>Exeter Marathon</td>
              <td>33m 19s</td>
              <td>1:04</td>
              <td>1:36</td>
              <td>2:08</td>
              <td></td>
              <td>2:46</td>
              <td>3:28</td>
              <td>4:14</td>
              <td>4:59</td>
              <td className='text-danger'>5:12</td>
            </tr>
            <tr class="table-success">
              <th scope="row">4</th>
              <td>15.10.2023</td>
              <td className='text-success'>Eden Marathon</td>
              <td>31m 24s</td>
              <td>1:04</td>
              <td>1:37</td>
              <td>2:13</td>
              <td></td>
              <td>2:50</td>
              <td>3:29</td>
              <td>4:09</td>
              <td>4:45</td>
              <td className='text-danger'>4:57</td>
            </tr>
            <tr class="table-warning">
              <th scope="row">5</th>
              <td>28.04.2024</td>
              <td className='text-success'>Plymouth Half</td>
              <td>27m 20s</td>
              <td>53m 46s</td>
              <td>1:21</td>
              <td>1:50</td>
              <td className='text-danger'>1:58</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='text-danger'></td>
            </tr>
            <tr class="table-info">
              <th scope="row">6</th>
              <td>12.05.2024</td>
              <td className='text-success'>Exeter Marathon</td>
              <td>27m 45s</td>
              <td>56m 59s</td>
              <td>1:26</td>
              <td>1:59</td>
              <td></td>
              <td>2:39</td>
              <td>3:22</td>
              <td>4:07</td>
              <td>4:54</td>
              <td className='text-danger'>5:17</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
}

export default Story6;
