import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';
import TypoGraphy from '../../../components/Typography';
import google from '../../../assets/icons/google.svg';
import { Img, ImgContainer } from '../../../assets/styles/styles';

const clientID =
  '508740843119-alvj4p7vgjqd8ge3k4cvog00gmhak18e.apps.googleusercontent.com';
let GoogleToken = '';

const GoogleButton = () => {
  const [token, setToken] = useState('');

  const OnSuccess = async (response: any) => {
    console.log(response);

    const {
      googleID,
      profileObj: { email, name },
    } = response;

    /*  await onSocial({
            socialID: googleID,
            socialType: 'google',
            email,
            nickname:name
        });*/

    // fetch('/api/v1/users/googleLogin', {
    //   method: 'POST',
    //   cache: 'no-cache',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ token: response.tokenId }),
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setToken(response.data.accessToken);
    //     alert('로그인 완료');
    //   });
  };

  if (token != null) {
    GoogleToken = token;
  }

  const onFailure = (error: any) => {
    console.log(error);
  };

  return (
    <GoogleLogin
      clientId={clientID}
      //   buttonText="   Google 아이디로 로그인   "
      responseType={'id_token'}
      onSuccess={OnSuccess}
      onFailure={onFailure}
      isSignedIn={true}
      render={(renderProps) => (
        <GoogleCustomButton
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <ImgContainer width="38px">
            <Img src={google} />
          </ImgContainer>
          <TypoGraphy
            text="Google 계정으로 로그인"
            color="#515151"
            size="input"
          />
        </GoogleCustomButton>
      )}
    />
  );
};

export { GoogleButton, GoogleToken };

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
