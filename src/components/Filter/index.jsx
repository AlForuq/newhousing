import React, { useRef } from "react";
import { Container, Icon, Advanced, Section } from "./style";
import { Button, Input } from "../../Generics";
import {
  // Dropdown,
  Popover,
} from "antd";

export const Filter = () => {
  const country = useRef();
  const region = useRef();
  const city = useRef();
  const zip_code = useRef();
  const address = useRef();
  const house_name = useRef();
  const room = useRef();
  const min = useRef();
  const max = useRef();
  const onChange = (e) => {
    console.log(e.target.value);
  };

  console.log("dsa");

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Adress</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          ref={country}
          name="country"
          placeholder={"Country"}
        />
        <Input
          onChange={onChange}
          ref={region}
          name="region"
          placeholder={"Region"}
        />
        <Input
          onChange={onChange}
          ref={city}
          name="city"
          placeholder={"City"}
        />
        <Input
          onChange={onChange}
          ref={zip_code}
          name="zip_code"
          placeholder={"Zip Code"}
        />
      </Section>

      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          ref={address}
          name="address"
          placeholder={"Address"}
        />
        <Input
          onChange={onChange}
          ref={house_name}
          name="house_name"
          placeholder={"House Name"}
        />
        <Input
          onChange={onChange}
          ref={room}
          name="room"
          placeholder={"Rooms"}
        />
      </Section>

      <Advanced.Title>Price</Advanced.Title>

      <Section>
        <Input
          onChange={onChange}
          ref={min}
          name="min-price"
          placeholder={"Min price"}
        />
        <Input
          onChange={onChange}
          ref={max}
          name="max-price"
          placeholder={"Max price"}
        />
      </Section>

      <Section>
        <Button width={130} ml={20} type="primary">
          Search
        </Button>
        <Button width={131} ml={20} type="secondary">
          Cancel
        </Button>
      </Section>
    </Advanced>
  );
  // const items = [
  //   {
  //     label: advancedSearch,
  //     key: "0",
  //   },
  // ];

  return (
    <Container>
      <Input
        pl={"40px"}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      >
        <Icon.FilterIcon />
      </Input>

      <Popover placement="bottomRight" trigger="click" content={advancedSearch}>
        <Button width={130} type={"light"}>
          <Icon.Setting />
          Advanced
        </Button>
      </Popover>

      {/* <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Button width={130} type={"light"}>
          <Icon.Setting />
          Advanced
        </Button>
      </Dropdown> */}

      <Button width={130}>
        <Icon.Search />
        Search
      </Button>
    </Container>
  );
};
