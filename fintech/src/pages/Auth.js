import React from "react";
import styled from "styled-components";
import AppHeader from "../components/common/AppHeader";

const AuthButton = styled.button`
  margin-top: 100px;
  padding: 20px;
  width: 100%;
`;

const handleClick = () => {
  let tmpwindow = window.open("about:blank");
  const clientId = "98634f2d-f153-4300-b7f4-18597bdd0567";
  tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
};

const Auth = () => {
  return (
    <div>
      <AppHeader title={"사용자 인증"}></AppHeader>
      <AuthButton onClick={handleClick}>사용자 인증하기</AuthButton>
    </div>
  );
};

export default Auth;