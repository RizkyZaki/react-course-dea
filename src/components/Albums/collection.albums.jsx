import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";

export const Collection = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASEURL}/photos?_limit=4`,
    }).then((result) => setDatas(result.data));
  }, []);

  // console.log(datas);
  return (
    <React.Fragment>
      <Carousel>
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt="First slide"
                height={450}
                width={450}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </React.Fragment>
  );
};
