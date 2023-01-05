import styled from 'styled-components';
import { Container, TextRow, TextWrap } from '../assets/styles/styles';
import { Btn10 } from '../components/Button';
import TypoGraphy from '../components/Typography';
import NoneLogin from './NoneLogin';

interface login {
  isLogin: boolean;
}

const MyStock = ({ isLogin }: login) => {
  return (
    <>
      {isLogin ? (
        <Wrap>
          <Container>
            <Title>
              <div>
                <TypoGraphy text="민성님의 포트폴리오" size="t1" />
                <TextWrap padding="24px 0 45px 0">
                  <TypoGraphy
                    text="보유 중인 주식을 입력하고 내 투자 현황까지 진단 받아보세요."
                    color="var(--type-gray-2)"
                    size="b1"
                  />
                </TextWrap>
              </div>
              <BtnWrapper>
                <Btn10 text="내 주식 진단받기 >" type="disable_check" />
              </BtnWrapper>
            </Title>
            <BoxContainer>
              <Box height="224px">
                <TextWrap padding="36px 0 42px 0">
                  <TypoGraphy
                    text="총 자산"
                    size="b3"
                    color="var(--type-gray-2)"
                  />
                </TextWrap>
                <TextRow>
                  <TypoGraphy text="0" size="b3" />
                  <TypoGraphy text="원" size="b3" color="var(--type-gray-2)" />
                </TextRow>
              </Box>
              <Box height="100%"></Box>
            </BoxContainer>
          </Container>
        </Wrap>
      ) : (
        <NoneLogin />
      )}
    </>
  );
};
export default MyStock;

const Wrap = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background: var(--type-gray-6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 68px 0;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BtnWrapper = styled.div`
  height: fit-content;
`;

const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Box = styled.div<{ height?: string }>`
  background: var(--type-white);
  width: 590px;
  height: ${(props) => props.height || 'auto'};
  border-radius: 10px;
  padding: 0 27px;
`;
