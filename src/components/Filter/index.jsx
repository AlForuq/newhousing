import React, { useRef } from "react";
import { Container, Icon, Advanced, Section } from "./style";
import { Button, Input } from "../../Generics";
import {
  // Dropdown,
  Popover,
} from "antd";
import { UseReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import UseSearch from "../../hooks/useSearch";

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

  const navigate = useNavigate();
  const location = useLocation();
  const query = UseSearch();
  console.log(query.get("country"));

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location.pathname}${UseReplace(name, value)}`);
  };

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Adress</Advanced.Title>
      <Section>
        <Input
          value={query.get("country")}
          onChange={onChange}
          ref={country}
          name="country"
          placeholder={"Country"}
        />
        <Input
          value={query.get("region")}
          onChange={onChange}
          ref={region}
          name="region"
          placeholder={"Region"}
        />
        <Input
          value={query.get("city")}
          onChange={onChange}
          ref={city}
          name="city"
          placeholder={"City"}
        />
        <Input
          value={query.get("zip_code")}
          onChange={onChange}
          ref={zip_code}
          name="zip_code"
          placeholder={"Zip Code"}
        />
      </Section>

      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input
          value={query.get("address")}
          onChange={onChange}
          ref={address}
          name="address"
          placeholder={"Address"}
        />
        <Input
          value={query.get("house_name")}
          onChange={onChange}
          ref={house_name}
          name="house_name"
          placeholder={"House Name"}
        />
        <Input
          value={query.get("room")}
          onChange={onChange}
          ref={room}
          name="room"
          placeholder={"Rooms"}
        />
      </Section>

      <Advanced.Title>Price</Advanced.Title>

      <Section>
        <Input
          value={query.get("min-price")}
          onChange={onChange}
          ref={min}
          name="min-price"
          placeholder={"Min price"}
        />
        <Input
          value={query.get("max-price")}
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

  console.log(UseReplace(), "useReplace");

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
