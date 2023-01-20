import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TypoGraphy from '../Typography';
import google from '../../assets/icons/google.svg';
import { Img, ImgContainer } from '../../assets/styles/styles';
import { SERVER } from '../../network/config';
import { useGoogleLogin } from '@react-oauth/google';

const client_id: string = process.env.REACT_APP_CLIENT_ID as string;
const client_secret: string = process.env.REACT_APP_CLIENT_SECRET as string;

// let GoogleToken = ''; //리덕스 사용 예정

const GoogleButton = () => {
  const [code, setCode] = useState('');
  const [googletoken, setGoogleToken] = useState(''); // 구글에서 받은 access token
  const [token, setToken] = useState(''); // finble에서 받은 access token
  const [name, setName] = useState('');

  const googleSocialLogin = useGoogleLogin({
    onSuccess: (response) => setCode(response.code), // 1회용 auth code 발급
    onError: (err) => console.log(err),
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
    flow: 'auth-code',
  });

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

  useEffect(() => {
    fetch(`${SERVER}/login/`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: googletoken }),
    })
      .then((response) => response.json())
      .then((res) => {
        setToken(res.token.access);
        setName(res.user.first_name);
      });
  }, [googletoken]);

  // if (token != null) {
  //   GoogleToken = token;
  // }
  return (
    // custom login button
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
