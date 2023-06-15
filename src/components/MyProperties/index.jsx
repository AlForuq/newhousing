import React, { useState } from "react";
import { AntdTable, Container, Edit, IconWrapper, Trash } from "./style";
import { useQuery } from "react-query";
import { useHttp } from "../../hooks/useHttp";
import { MiniHouseCard } from "./MiniHouseCard";
import { useContext } from "react";
import { FavouritesContext } from "../../context/favourites";
import { Button } from "../../Generics";
import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;

export const MyProperties = () => {
  const { request } = useHttp();
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [refetcher, setRefetch] = useContext(FavouritesContext);
  const propertiesQuery = useQuery(
    [],
    () => request({ url: "/v1/houses/me", token: true }),

    {
      onSuccess: (resProp) => {
        if (resProp.success) {
          // console.log(resProp, "properties");
          setProperties(resProp?.data || []);
          setRefetch({ ...refetcher, pro: propertiesQuery.refetch });
        }
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const onDelete = (id) => {
    fetch(`${url}/v1/houses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.success) {
          propertiesQuery.refetch();
        }
      });
  };

  const onEdit = (id) => {
    navigate(`/profile/edit/${id}`);
  };
  console.log(properties);
  const dataSource2 = properties.map(
    ({
      id,
      houseDetails: { yearBuilt },
      name,
      category,
      country,
      address,
      city,
      region,
      attachments,
      salePrice,
      price,
    }) => {
      return {
        key: id,
        list: (
          <MiniHouseCard
            price={price}
            salePrice={salePrice}
            attachments={attachments}
            name={name}
            country={country}
            address={address}
            city={city}
            region={region}
          />
        ),
        category: category.name,
        date: yearBuilt,
        actions: (
          <div style={{ display: "flex", gap: "10px" }}>
            <IconWrapper onClick={() => onEdit(id)}>
              <Edit>Edit</Edit>
            </IconWrapper>
            <IconWrapper onClick={() => onDelete(id)}>
              <Trash>Delete</Trash>
            </IconWrapper>
          </div>
        ),
      };
    }
  );

  const columns = [
    {
      title: "Listing Title",
      dataIndex: "list",
      key: "list",
      width: 450,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Date Published",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  return (
    <Container>
      <div className="title center">My Properties</div>
      <div className="description center">The Houses I added!!!</div>
      <Button
        onClick={() => navigate("/profile/add")}
        mb={25}
        mt={25}
        width={"100%"}
      >
        Add House
      </Button>
      <AntdTable dataSource={dataSource2} columns={columns} />
    </Container>
  );
};
