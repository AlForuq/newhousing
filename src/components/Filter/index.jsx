import React, { useRef, useState } from "react";
import { Container, Icon, Advanced, Section } from "./style";
import { Button, Input } from "../../Generics";
import {
  // Dropdown,
  Popover,
  Select,
} from "antd";
import UseSearch from "../../hooks/useSearch";
import { UseReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

export const Filter = () => {
  const { Option } = Select;
  const { REACT_APP_BASE_URL: url } = process.env;
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
  const { search } = useLocation();
  const query = UseSearch();
  const [addressFilter, setAddressFilter] = useState("");

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location.pathname}${UseReplace(name, value)}`);
  };

  const onClick = () => {
    navigate(
      `${location.pathname}${UseReplace("address", addressFilter.trim())}`
    );
  };

  const onClear = () => {
    // address.current.value = "";
    setAddressFilter("");
    if (query.get("address")) {
      navigate(`${location.pathname}${UseReplace("address", "")}`);
    }
  };

  const onChangeSearch = ({ target: { value } }) => {
    setAddressFilter(value);
    if (value === "") {
      if (query.get("address")) {
        navigate(`${location.pathname}${UseReplace("address", value)}`);
      }
    }
  };

  const { data } = useQuery(
    [search],
    () =>
      fetch(`${url}/v1/categories/list`, {
        method: "get",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  const changeCategory = (e) => {
    navigate(`/properties${UseReplace("category_id", e)}`);
    setOpen(false);
  };
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const onReset = () => {
    navigate("/properties");
    setOpen(false);
    setAddressFilter("");
  };

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Adress</Advanced.Title>
      <Section>
        <Input
          value={query.get("country") || ""}
          onChange={onChange}
          ref={country}
          name="country"
          placeholder={"Country"}
        />
        <Input
          value={query.get("region") || ""}
          onChange={onChange}
          ref={region}
          name="region"
          placeholder={"Region"}
        />
        <Input
          value={query.get("city") || ""}
          onChange={onChange}
          ref={city}
          name="city"
          placeholder={"City"}
        />
        <Input
          value={query.get("zip_code") || ""}
          onChange={onChange}
          ref={zip_code}
          name="zip_code"
          placeholder={"Zip Code"}
        />
      </Section>

      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input
          value={query.get("address") || ""}
          onChange={onChange}
          ref={address}
          name="address"
          placeholder={"Address"}
        />
        <Input
          value={query.get("house_name") || ""}
          onChange={onChange}
          ref={house_name}
          name="house_name"
          placeholder={"House Name"}
        />
        <Input
          value={query.get("room") || ""}
          onChange={onChange}
          ref={room}
          name="room"
          placeholder={"Rooms"}
        />
      </Section>

      <Advanced.Title>Price</Advanced.Title>

      <Section>
        <Input
          value={query.get("min_price") || ""}
          onChange={onChange}
          ref={min}
          name="min_price"
          placeholder={"Min price"}
        />
        <Input
          value={query.get("max_price") || ""}
          onChange={onChange}
          ref={max}
          name="max_price"
          placeholder={"Max price"}
        />
        {/* <Select
          onChange={changeCategory}
          value={Number(query.get("category_id")) || "Category"}
          options={[
            {
              value: 1,
              label: "Villa",
            },
            {
              value: 2,
              label: "Office",
            },
            {
              value: 10,
              label: "Mansion",
            },
            {
              value: 12,
              label: "Apartment",
            },
            {
              value: 13,
              label: "Dormitory",
            },
          ]}
        /> */}
        <Select
          style={{ width: "280px" }}
          onChange={changeCategory}
          value={Number(query.get("category_id")) || "Category"}
        >
          {query.get("category_id") && (
            <Select.Option value={""}>Clear</Select.Option>
          )}
          {data?.data?.map((item) => {
            return (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </Section>

      <Section>
        <Button onClick={onReset} width={130} type="primary">
          Reset
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
        value={addressFilter}
        onChange={onChangeSearch}
        // ref={address}
        name={"address"}
        placeholder={"Enter an address"}
        cancelIcon={<Icon.Cancel onClick={onClear} />}
      >
        <Icon.FilterIcon />
      </Input>

      <Button onClick={onClick} width={130}>
        <Icon.Search />
        Search
      </Button>

      <Popover
        placement="bottomRight"
        trigger={["click"]}
        content={advancedSearch}
        open={open}
        onOpenChange={handleOpenChange}
      >
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
    </Container>
  );
};
