import React, { useState } from "react";
import { Box, Container } from "./style";
import { Button, Input } from "../../Generics";
import Checkbox from "../../Generics/Checkbox";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";

import { message } from "antd";
export const Login = () => {
  // const { REACT_APP_BASE_URL: url } = process.env;
  const navigate = useNavigate();
  const [bool, setBool] = useState("password");
  const [match, setMatch] = useState("");
  const { request } = useHttp();

  const [login, setLogin] = useState({
    email: "mukhammadiev.feruz007@gmail.com",
    password: "12345",
  });

  const onHideToggle = ({ target: { checked } }) => {
    if (checked) {
      setBool("text");
    } else {
      setBool("password");
    }
  };

  const onChangeLogin = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  };

  const success = () => {
    message.success("Successfully Logged in", [1.5]);
  };
  const warning = () => {
    message.warning("Failed to Login", [1.5]);
  };

  const onClickLogin = () => {
    // fetch(`${url}/public/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(login),
    // })
    //   .then((res) => res.json())
    request({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "/public/auth/login",
      body: login,
    })
      .then((res) => {
        // console.log(res, "Login");
        if (res.success !== false) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);

          setLogin({ email: "", password: "" });
          success();
        } else if (!res.success) {
          warning();
          setMatch("Email or Password is incorrect");
        }
      })
      .catch(() => {});
  };

  return (
    <Container>
      <Box>
        <div className="subTitle">Login</div>
        <Input
          value={login?.email}
          name={"email"}
          onChange={onChangeLogin}
          pl={"15px"}
          mt={30}
          height={30}
          border={"open"}
          placeholder={"Email"}
        />
        <Input
          value={login?.password}
          name={"password"}
          onChange={onChangeLogin}
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
        <Button onClick={onClickLogin} mt={33} width={"100%"}>
          Login
        </Button>
      </Box>
    </Container>
  );
};
