import React from 'react'
import { Carousel } from 'react-bootstrap';

function Story6() {

  return (
    <>
      <div className="text-center text-secondary p-5 m-5 border border-danger">
        <h1 className="text-center h1">STORY 6</h1>
        <p className="text-secondary text-center h3">Comming soon...(Exeter Marathon)</p>
        <p className="text-secondary text-center h3">Wellcome to my fifth page</p>
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
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='text-danger'>?</td>
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
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='text-danger'>?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center text-secondary p-5 m-5 border border-danger">
        <h1>IMAGES</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./1marathon22.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./2marathon22.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./3marathon22.png"
              alt="third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./4marathon22.png"
              alt="fourth slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Story6;
