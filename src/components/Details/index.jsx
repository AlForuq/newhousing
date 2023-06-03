import React, { useEffect, useState } from "react";
import {
  AgreeMent,
  Container,
  Form,
  Grid,
  Icon,
  IconWrapper,
  Info,
  Price,
  TextArea,
  User,
} from "./style";
import { useParams } from "react-router-dom";
import img1 from "../../assets/images/detailedImg1.png";
import img2 from "../../assets/images/detailedImg2.png";
import img3 from "../../assets/images/detailedImg3.png";
import img4 from "../../assets/images/detailedImg4.png";
import img5 from "../../assets/images/detailedImg5.png";
import user from "../../assets/images/avatar2.png";
import { Button, Input } from "../../Generics/index";
import Checkbox from "../../Generics/Checkbox";
import { Location } from "./Location";
import { PropertyDetails } from "./PropertyDetails";
import { Features } from "./Features";
// import { Yandex } from "../Yandex";
export const Details = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [info, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${url}/v1/houses/id/${id}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res?.data);
        setData(res?.data);
      })
      .catch(() => {});
  }, [id, url]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Grid>
        <div className=" item1">
          <img src={img1} alt="" />
        </div>
        <div className=" item2">
          <img src={img2} alt="" />
        </div>
        <div className=" item3">
          <img src={img3} alt="" />
        </div>
        <div className=" item4">
          <img src={img4} alt="" />
        </div>
        <div className=" item5">
          <img src={img5} alt="" />
        </div>

        <div className="grid-item grid1">
          <Info.Title>
            {info?.name || "Name of Property"}, Category: {info?.category?.name}{" "}
          </Info.Title>

          <Info.Text>
            {info?.address || "Address"}, {info?.region || "Region"},{" "}
            {info?.city || "City"}, {info?.country || "Country"}
          </Info.Text>
        </div>
        <div className="grid-item grid2">
          <IconWrapper className="nocopy">
            <div className="social">
              <Icon.Share />
              <Info.Text>Share</Info.Text>
            </div>
            <div className="social">
              <Icon.Love />
              <Info.Text>Like</Info.Text>
            </div>
          </IconWrapper>
        </div>
        <div className="grid-item grid3">
          <Info.Details>
            <Icon.Wrapper>
              <Icon.Bed />
              <Info.Text>{info?.houseDetails?.beds || 0} Beds </Info.Text>
            </Icon.Wrapper>

            <Icon.Wrapper>
              <Icon.Bath />
              <Info.Text>{info?.houseDetails?.bath || 0} Baths </Info.Text>
            </Icon.Wrapper>

            <Icon.Wrapper>
              <Icon.Garage />
              <Info.Text>{info?.houseDetails?.garage || 0} Garage </Info.Text>
            </Icon.Wrapper>

            <Icon.Wrapper>
              <Icon.Ruler />
              <Info.Text>{info?.houseDetails?.area || 0} Sq Ft </Info.Text>
            </Icon.Wrapper>
            <Icon.Wrapper>
              <Icon.Calendar />
              <Info.Text>
                Year Built: {info?.houseDetails?.yearBuilt || "unknown"}{" "}
              </Info.Text>
            </Icon.Wrapper>
          </Info.Details>
        </div>
        <div className="grid-item grid4">
          <Price.Wrapper>
            <Price.Origin>${info?.salePrice || 0} / mo</Price.Origin>
            <Price.Sale>${info?.price || 0} / mo</Price.Sale>
          </Price.Wrapper>
        </div>
        <div className="grid-item grid5">
          <div className="subTitle">Description</div>
          <div className="description">{info.description}</div>
        </div>

        <div className="grid-item grid6">
          <Form>
            <User>
              <User.Wrapper className={"nocopy"}>
                <img src={user} alt="" />
              </User.Wrapper>
              <User.Contact>
                <User.Name>Muhammadamin</User.Name>
                <User.Phone>+998 94 692 08 03</User.Phone>
              </User.Contact>
            </User>

            <Input
              // mt={20}
              pl={"4px"}
              border={"open"}
              placeholder={"Name"}
              height={"27px"}
            />
            <Input
              // mt={20}
              pl={"4px"}
              border={"open"}
              placeholder={"Phone"}
              height={"27px"}
            />
            <Input
              // mt={20}
              pl={"4px"}
              border={"open"}
              placeholder={"Email"}
              height={"27px"}
            />

            <div>
              <div className="subTitle">Message</div>
              <TextArea />
            </div>
            <AgreeMent>
              <Checkbox />
              <AgreeMent>
                By submitting this form I agree to Terms of Use
              </AgreeMent>
            </AgreeMent>
            <Button type={"primary"}>Send Request</Button>
          </Form>
        </div>
      </Grid>

      <Location data={info} />
      {/* <Yandex /> */}
      <PropertyDetails data={info} />
      <Features data={info} />

    </Container>
  );
};
