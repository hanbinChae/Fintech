import React, { useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import AppHeader from "../components/common/AppHeader";
import axios from "axios";

const AuthResult = () => {
  const code = useLocation().search;
  console.log(code)
  const authCode = queryString.parse(code).code;

  const [accessToken, setAccessToken] = useState("토큰 받기 전");
  const [userSeqNo, setUserSeqNo] = useState("사용자 번호 받기 전");

  const handleClick = () => {
    //우리가 전달할 데이터
    let sendData = {
      code: authCode,
      client_id: "98634f2d-f153-4300-b7f4-18597bdd0567",
      client_secret: "3108205e-f9ab-49fd-bcc5-70bb13cea209",
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };

    //서버가 받을 데이터 형태로 변경
    const parsedSendData = queryString.stringify(sendData);

    //요청의 정의
    const option = {
      method: "POST",
      url: "/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: parsedSendData,
    };

    axios(option).then(({ data }) => {
      console.log(data);
      setAccessToken(data.access_token);
      setUserSeqNo(data.user_seq_no);
      
      if (data.rsp_code !== "O0001") {
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("userSeqNo", data.user_seq_no);
        alert("저장 완료");
      } 
      else {
        alert("인증에 실패했습니다 다시 시도해 주세요");
      }
    });
  };

  console.log(authCode);

  return (
    <div>
      <AppHeader title={"사용자 인증 완료후 토큰 발급"}></AppHeader>
      <p>인증 코드 : {authCode}</p>
      <button onClick={handleClick}>토큰 받기</button>
      <p>AccessToken : {accessToken}</p>
      <p>useSeqNo : {userSeqNo}</p>
    </div>
  );
};

export default AuthResult;