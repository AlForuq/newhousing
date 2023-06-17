import React, { useState, useEffect, useContext } from "react"; // useState // useRef,
// import AliceCarousel from "react-alice-carousel";
import { HouseCard } from "../../HouseCard";
import {
  // ArrowLeft, ArrowRight,
  Cards,
  Container,
  Wrapper,
} from "./style";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { FavListContext } from "../../../context/favList";
// import { useQuery } from "react-query";

// import {useQuery} from 'react-query'

const { REACT_APP_BASE_URL: url } = process.env;
export const Recomandation = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
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
  const [favList] = useContext(FavListContext);

  useEffect(() => {
    fetch(`${url}/v1/houses/list`, {})
      .then((res) => res.json())
      .then((res) => {
        const arr3 = res?.data?.map((obj2) => {
          const matchingObj = favList?.find((obj1) => obj1.id === obj2.id);
          return matchingObj
            ? { favorite: matchingObj?.favorite, ...obj2 }
            : { favorite: false, ...obj2 };
        });
        setList(arr3.sort((a, b) => a.id - b.id));
      })
      .catch(() => {});

    // eslint-disable-next-line
  }, [favList.length]);

  const settings = {
    dots: true,
    infinite: false,
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
              return (
                <HouseCard
                  onClick={() => navigate(`/properties/${value.id}`)}
                  key={value.id}
                  info={value}
                  favourite={
                    (value.favorite === false || value.favorite === true) &&
                    JSON.stringify(value.favorite)
                  }
                />
              );
            })}
          </Slider>
        </Cards>
      </Wrapper>
    </Container>
  );
};
