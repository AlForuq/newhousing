import React, { useRef, useState } from "react";
import { Card } from "./Card";
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from "./style";
import AliceCarousel from "react-alice-carousel";

import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";

// const { REACT_APP_BASE_URL: url } = process.env;

export const Categories = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);

  const onSelect = (id) => {
    navigate(`/properties?category_id=${id}`);
  };

  const { request } = useHttp();

  useQuery(
    "",
    () =>
      //   fetch(
      //     `${url}/v1/categories/list
      // `,
      //     {
      //       method: "get",
      //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      //     }
      //   ).then((res) => res.json()),

      request({ url: "/v1/categories/list", token: true }),
    {
      onSuccess: (res) => {
        console.log(res, "Category");
        let list = res?.data?.map((value) => {
          return (
            <Card onClick={() => onSelect(value.id)} title={value?.name} />
          );
        });
        setItem(list);
      },
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
  const slider = useRef();
  // console.log(item, 'state')

  return (
    <Container className="nocopy">
      <div className="title center">Categories </div>
      <div className="description center">
        The Houses that You Want and dream!!!
      </div>

      <Wrapper>
        <Cards>
          <AliceCarousel
            ref={slider}
            items={item}
            arrows={false}
            autoWidth
            mouseTracking
          />

          <ArrowLeft onClick={() => slider.current?.slideNext()}>
            &rang;
          </ArrowLeft>

          <ArrowRight onClick={() => slider.current?.slidePrev()}>
            &lang;
          </ArrowRight>
        </Cards>
      </Wrapper>
    </Container>
  );
};
