import React, { useState, useEffect } from "react"; // useState // useRef,
// import AliceCarousel from "react-alice-carousel";
import { HouseCard } from "../../HouseCard";
import {
  // ArrowLeft, ArrowRight,
  Cards,
  Container,
  Wrapper,
} from "./style";
import Slider from "react-slick";
// import { useQuery } from "react-query";

// import {useQuery} from 'react-query'

const { REACT_APP_BASE_URL: url } = process.env;
export const Recomandation = () => {
  const [list, setList] = useState([]);
  // useQuery(
  //   "",
  //   () => {
  //     return fetch(`${url}/v1/houses/list`);
  //   },
  //   {
  //     onSuccess: (res) => {
  //       let list = res?.data?.map((value) => {
  //         return <HouseCard info={value} />;
  //       });
  //       setList(list);
  //     },
  //   }
  // );

  // const req = useMutation(() => {
  //   return fetch()
  // })

  // req.mutate([], {
  //   onSuccess: res => {}
  // })

  // const slider = useRef();
  // const items = [
  //   <HouseCard />,
  //   <HouseCard />,
  //   <HouseCard />,
  //   <HouseCard />,
  //   <HouseCard />,
  //   <HouseCard />,
  // ];

  useEffect(() => {
    fetch(`${url}/v1/houses/list`, {})
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        setList(res?.data);
      })
      .catch(() => {});

    // eslint-disable-next-line
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };
  return (
    <Container className="nocopy">
      <div className="title center">Recommendation</div>
      <div className="description center">
        The Houses that You Want and dream!!!
      </div>

      <Wrapper>
        <Cards>
          {/* <AliceCarousel
            ref={slider}
            items={items}
            arrows={false}
            autoWidth
            mouseTracking
            
          /> 
          */}

          {/* <ArrowLeft onClick={() => slider.current?.slidePrev()}>
              &lang;
            </ArrowLeft>

            <ArrowRight onClick={() => slider.current?.slideNext()}>
              &rang;
            </ArrowRight> */}
          <Slider {...settings}>
            {list.map((value) => {
              return <HouseCard key={value.id} info={value} />;
            })}
          </Slider>
        </Cards>
      </Wrapper>
    </Container>
  );
};
