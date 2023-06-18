import React, { useEffect, useState } from "react";
import { Container, Section, Selection, Wrapper } from "./style";
import { Button, Checkbox, Input } from "../../Generics";
import { useFormik } from "formik";
import { useHttp } from "../../hooks/useHttp";
import { useNavigate, useParams } from "react-router-dom";

export const AddHouse = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const { request } = useHttp();
  const navigate = useNavigate();
  const { id } = useParams();

  const [categoryList] = useState([
    {
      id: 1,
      name: "Villa",
    },
    {
      id: 2,
      name: "Office",
    },
    {
      id: 10,
      name: "Mansion",
    },
    {
      id: 12,
      name: "Apartment",
    },
    {
      id: 13,
      name: "Dormitory",
    },
  ]);

  const [initial, setInitial] = useState({
    address: "",
    attachments: [
      {
        imgPath: "",
      },
    ],
    categoryId: 0,
    city: "",
    componentsDto: {
      additional: "",
      airCondition: false,
      courtyard: false,
      furniture: false,
      gasStove: false,
      internet: false,
      tv: false,
    },
    country: "",
    description: "",
    homeAmenitiesDto: {
      additional: "",
      busStop: false,
      garden: false,
      market: false,
      park: false,
      parking: false,
      school: false,
      stadium: false,
      subway: false,
      superMarket: false,
    },
    houseDetails: {
      area: "",
      bath: "",
      beds: "",
      garage: "",
      room: "",
      yearBuilt: "",
    },
    locations: {
      latitude: 0,
      longitude: 0,
    },
    name: "",
    price: "",
    region: "",
    salePrice: "",
    status: true,
    zipCode: "",
  });

  // const changeCategory = (id) => {
  //   setCateg(id);
  // };

  useEffect(() => {
    id &&
      fetch(`${url}/v1/houses/id/${id}`)
        .then((res) => res.json())
        .then((res) => {
          if (res?.success) {
            let idf = categoryList?.find(
              (value) => value?.name === res?.data?.category?.name && value
            );
            setInitial({
              ...res?.data,
              categoryId: idf.id,
            });
          }
        });

    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,
    onSubmit: (values) => {
      request({
        url: id ? `/v1/houses/${id}` : "/v1/houses",
        method: id ? "PUT" : "POST",
        token: true,
        body: values,
      }).then((res) => {
        if (res?.success) {
          navigate("/profile");
        }
      });
    },
  });
  return (
    <Container onSubmit={formik.handleSubmit}>
      <div className="title">{id ? "Edit the " : "Add a new "} Property</div>
      <Section>
        <div className="subTitle">Contact Information</div>
        <Wrapper>
          <Input
            onChange={formik.handleChange}
            value={formik.values.name}
            name={"name"}
            placeholder={"Property Name"}
            border={"open"}
            required
          />
          {/* <Input
            onChange={formik.handleChange}
            value={formik.values.categoryId}
            name={"categoryId"}
            placeholder={"Type"}
            border={"open"}
            type={"number"}
            required
          /> */}
          <Selection
            border={"open"}
            onChange={formik.handleChange}
            name={"categoryId"}
            value={formik.values.categoryId}
          >
            <option value={0}>Select Category</option>
            <option value={1}>Villa</option>
            <option value={2}>Office</option>
            <option value={10}>Mansion</option>
            <option value={12}>Apartment</option>
            <option value={13}>Dormitory</option>
          </Selection>
        </Wrapper>
        <Wrapper>
          <Input
            onChange={formik.handleChange}
            value={formik.values.description}
            name={"description"}
            placeholder={"Description"}
            border={"open"}
            required
          />
        </Wrapper>
      </Section>

      <Section>
        <div className="subTitle">Additional</div>
        <Wrapper>
          <Input
            onChange={formik.handleChange}
            value={formik.values.houseDetails.room}
            name={"houseDetails.room"}
            type={"number"}
            placeholder={"Room"}
            border={"open"}
            min={1}
            max={999}
            required
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.houseDetails.beds}
            name={"houseDetails.beds"}
            type={"number"}
            placeholder={"Bed"}
            border={"open"}
            min={1}
            max={999}
            required
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.houseDetails.bath}
            name={"houseDetails.bath"}
            type={"number"}
            placeholder={"Bath"}
            border={"open"}
            min={1}
            max={999}
            required
          />
        </Wrapper>
        <Wrapper>
          <Input
            onChange={formik.handleChange}
            value={formik.values.houseDetails.garage}
            name={"houseDetails.garage"}
            type={"number"}
            placeholder={"Garage"}
            border={"open"}
            min={1}
            max={999}
            required
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.houseDetails.area}
            name={"houseDetails.area"}
            type={"number"}
            placeholder={"Area in Sq Ft"}
            border={"open"}
            min={1}
            max={999}
            required
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.houseDetails.yearBuilt}
            name={"houseDetails.yearBuilt"}
            type={"number"}
            placeholder={"Year Built"}
            border={"open"}
            min={1000}
            max={2999}
            required
          />
        </Wrapper>
      </Section>

      <Section>
        <div className="subTitle">Price</div>
        <Wrapper>
          <Input
            onChange={formik.handleChange}
            value={formik.values.price}
            name={"price"}
            type={"number"}
            placeholder={"Original Price"}
            border={"open"}
            required
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.salePrice}
            name={"salePrice"}
            type={"number"}
            placeholder={"Price Now"}
            border={"open"}
            required
          />
        </Wrapper>
      </Section>

      <Section>
        <div className="subTitle">Location</div>
        <Wrapper>
          <Input
            onChange={formik.handleChange}
            value={formik.values.address}
            name={"address"}
            placeholder={"Address"}
            border={"open"}
            required
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.region}
            name={"region"}
            placeholder={"Region"}
            border={"open"}
            required
          />
        </Wrapper>
        <Wrapper>
          <Input
            onChange={formik.handleChange}
            value={formik.values.city}
            name={"city"}
            placeholder={"City"}
            border={"open"}
            required
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.country}
            name={"country"}
            placeholder={"Country"}
            border={"open"}
            required
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.zipCode}
            name={"zipCode"}
            placeholder={"Postal Code"}
            border={"open"}
            required
          />
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Input
            onChange={formik.handleChange}
            value={formik.values.attachments[0].imgPath}
            name={"attachments[0].imgPath"}
            placeholder={"Image URL"}
            border={"open"}
            required
          />
        </Wrapper>
      </Section>

      <Section>
        <div>Amenities</div>
        <Wrapper>
          <Checkbox
            onChange={formik.handleChange}
            name={"componentsDto.furniture"}
            checked={formik.values.componentsDto?.furniture}
          >
            Furniture
          </Checkbox>
          <Checkbox
            onChange={formik.handleChange}
            name={"componentsDto.airCondition"}
            checked={formik.values.componentsDto?.airCondition}
          >
            Air Conditioning
          </Checkbox>
          <Checkbox
            onChange={formik.handleChange}
            name={"componentsDto.internet"}
            checked={formik.values.componentsDto?.internet}
          >
            Internet
          </Checkbox>
          <Checkbox
            onChange={formik.handleChange}
            name={"componentsDto.tv"}
            checked={formik.values.componentsDto?.tv}
          >
            Tv
          </Checkbox>
        </Wrapper>
        <Wrapper>
          <Checkbox
            onChange={formik.handleChange}
            name={"componentsDto.gasStove"}
            checked={formik.values.componentsDto?.gasStove}
          >
            Gas Stove
          </Checkbox>
          <Checkbox
            onChange={formik.handleChange}
            name={"homeAmenitiesDto.parking"}
            checked={formik.values.homeAmenitiesDto?.parking}
          >
            Parking
          </Checkbox>
          <Checkbox
            onChange={formik.handleChange}
            name={"homeAmenitiesDto.garden"}
            checked={formik.values.homeAmenitiesDto?.garden}
          >
            Garden
          </Checkbox>
          <Checkbox
            onChange={formik.handleChange}
            name={"homeAmenitiesDto.busStop"}
            checked={formik.values.homeAmenitiesDto?.busStop}
          >
            Bus Stop
          </Checkbox>
        </Wrapper>
        <Wrapper>
          <Checkbox
            onChange={formik.handleChange}
            name={"homeAmenitiesDto.market"}
            checked={formik.values.homeAmenitiesDto?.market}
          >
            Market
          </Checkbox>
          <Checkbox
            onChange={formik.handleChange}
            name={"homeAmenitiesDto.park"}
            checked={formik.values.homeAmenitiesDto?.park}
          >
            Park
          </Checkbox>
          <Checkbox
            onChange={formik.handleChange}
            name={"homeAmenitiesDto.school"}
            checked={formik.values.homeAmenitiesDto?.school}
          >
            School
          </Checkbox>
          <Checkbox
            onChange={formik.handleChange}
            name={"homeAmenitiesDto.stadium"}
            checked={formik.values.homeAmenitiesDto?.stadium}
          >
            Stadium
          </Checkbox>
        </Wrapper>
        <Wrapper>
          <Checkbox
            onChange={formik.handleChange}
            name={"componentsDto.courtyard"}
            checked={formik.values.componentsDto?.courtyard}
          >
            Courtyard
          </Checkbox>
          <Checkbox
            onChange={formik.handleChange}
            name={"homeAmenitiesDto.subway"}
            checked={formik.values.homeAmenitiesDto?.subway}
          >
            Subway
          </Checkbox>
          <Checkbox
            onChange={formik.handleChange}
            name={"homeAmenitiesDto.superMarket"}
            checked={formik.values.homeAmenitiesDto?.superMarket}
          >
            Super Market
          </Checkbox>
          <div />
        </Wrapper>
      </Section>
      {id ? (
        <Button type="submit" width={240}>
          Edit
        </Button>
      ) : (
        <Button type="submit" width={240}>
          Save
        </Button>
      )}
    </Container>
  );
};
