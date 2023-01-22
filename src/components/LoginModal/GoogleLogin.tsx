import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TypoGraphy from '../Typography';
import google from '../../assets/icons/google.svg';
import { Img, ImgContainer } from '../../assets/styles/styles';
import { SERVER } from '../../network/config';
import { useGoogleLogin } from '@react-oauth/google';

import { setName, setToken } from '../../store/slice/userSlice';
import { useSelector } from 'react-redux';
import { nameState, tokenState } from '../../store/slice/userSlice';
import { useDispatch } from 'react-redux';

const client_id: string = process.env.REACT_APP_CLIENT_ID as string;
const client_secret: string = process.env.REACT_APP_CLIENT_SECRET as string;

// let googleToken = ''; //리덕스 사용 예정

const GoogleButton = ({ setModalOpen }: any) => {
  const [code, setCode] = useState(''); // 1회용 auth code
  const [googleToken, setGoogleToken] = useState(''); // 구글에서 받은 access token

  const token = useSelector(tokenState);
  const dispatch = useDispatch();

  const googleSocialLogin = useGoogleLogin({
    onSuccess: (response) => setCode(response.code), // 1회용 auth code 발급
    onError: (err) => console.log(err),
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
    flow: 'auth-code',
  });

  // 1회용 auth code 발급받고 google access token 발급 받음
  useEffect(() => {
    const data = JSON.stringify({
      code: code,
      client_id: client_id,
      client_secret: client_secret,
      redirect_uri: 'http://localhost:3000',
      grant_type: 'authorization_code',
    });

    fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((res) => res.json())
      .then((res) => setGoogleToken(res.access_token));
  }, [code]);

  // google access token을 발급 받으면 finble server에 login 성공 요청을 보냄.
  useEffect(() => {
    fetch(`${SERVER}/login/`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: googleToken }),
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch(setName({ name: res.user.username as string }));
        dispatch(setToken({ token: res.token.access as string }));
        setModalOpen(false);
      });
  }, [googleToken]);

  return (
    <GoogleCustomButton onClick={googleSocialLogin}>
      <ImgContainer width="38px">
        <Img src={google} />
      </ImgContainer>
      <TypoGraphy text="Google 계정으로 로그인" color="#515151" size="input" />
    </GoogleCustomButton>
  );
};

export { GoogleButton };

const GoogleCustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 78px;
  gap: 10px;

  background: #ffffff;
  box-shadow: 0px 0px 18.0573px rgba(0, 0, 0, 0.15);
  border-radius: 60px;
  border: none;
`;
