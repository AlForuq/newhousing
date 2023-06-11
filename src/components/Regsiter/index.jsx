import React, { useState } from "react";
import { Box, Container } from "./style";
import { Button, Input } from "../../Generics";
import Checkbox from "../../Generics/Checkbox";
import { useNavigate } from "react-router-dom";
// import { useHttp } from "../../hooks/useHttp";

import { message } from "antd";
export const Regsiter = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const navigate = useNavigate();
  const [bool, setBool] = useState("password");
  const [match, setMatch] = useState("");
  // const { request } = useHttp();

  const [login, setLogin] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const onHideToggle = ({ target: { checked } }) => {
    if (checked) {
      setBool("text");
    } else {
      setBool("password");
    }
  };

  const onChangeRegister = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  };

  const info = () => {
    message.info("Successfully Logged in");
  };
  const warning = () => {
    message.warning("Failed to Login ");
  };

  const onClickRegister = () => {
    fetch(`${url}/public/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      // request({
      //   method: "POST",
      //   // headers: { "Content-Type": "application/json" },
      //   url: "/public/auth/register",
      //   body: login,
      // })
      .then((res) => {
        // console.log(res, "register");
        if (!res.success) {
          warning();
          setMatch(res.message);
        } else {
          navigate("/home");
          // localStorage.setItem("token", res?.authenticationToken);
          setLogin({ email: "", firstname: "", lastname: "", password: "" });
          info();
        }
      })
      .catch(() => {});
  };

  return (
    <Container>
      <Box>
        <div className="subTitle">Regsiter</div>
        <Input
          value={login?.firstname}
          name={"firstname"}
          onChange={onChangeRegister}
          pl={"15px"}
          mt={30}
          height={30}
          border={"open"}
          placeholder={"First Name"}
        />
        <Input
          value={login?.lastname}
          name={"lastname"}
          onChange={onChangeRegister}
          pl={"15px"}
          mt={30}
          mb={5}
          height={30}
          border={"open"}
          placeholder={"Last Name"}
        />

        <Input
          value={login?.email}
          name={"email"}
          onChange={onChangeRegister}
          pl={"15px"}
          mt={30}
          mb={5}
          height={30}
          border={"open"}
          placeholder={"Email"}
        />

        <Input
          value={login?.password}
          name={"password"}
          onChange={onChangeRegister}
          type={bool}
          pl={"15px"}
          mt={30}
          mb={5}
          height={30}
          border={"open"}
          placeholder={"Password"}
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "red" }}>{match}</span>{" "}
          <Checkbox onChange={onHideToggle}>Show Password</Checkbox>
        </div>

        <div className="div">
          <Checkbox>Remember Me</Checkbox>
          <span className="forgot">Forgot</span>
        </div>
        <Button onClick={onClickRegister} mt={33} width={"100%"}>
          Login
        </Button>
      </Box>
    </Container>
  );
};
