import styled from 'styled-components';
import {
  Img,
  ImgContainer,
  TextRow,
  TextWrap,
} from '../../../assets/styles/styles';
import TypoGraphy from '../../../components/Typography';
import ArrowDown from '../../../assets/icons/arrowDown.svg';
import QuestionMark from '../../../assets/icons/questionMark.svg';
import ToolTip from './ToolTip';
import { useState } from 'react';

interface box {
  title: string;
  status?: string;
}

const WhiteSmallBox = ({ title, status }: box) => {
  let color;
  const [display, setDisplay] = useState(false);

  if (status == '위험') {
    color = 'var(--semantic-red)';
  } else if (status == '안전') {
    color = '#57DC77';
  }

  return (
    <WhiteBox width="497px" height="263px" borderColor={color}>
      <TextContainer>
        <TypoGraphy text={title} size="t3" />
        <StatusBox>
          <StatusCircle color={color} />
          <TypoGraphy text={status} size="t3" />
        </StatusBox>
      </TextContainer>

      <TextWrap padding="40px 0 0 0">
        <TextRow style={{ alignItems: 'center', gap: '10px' }}>
          <ImgContainer width="20px">
            <Img src={ArrowDown} />
          </ImgContainer>
          <TypoGraphy text="34.52%&nbsp;" color="var(--main-blue)" size="t2" />
          <TypoGraphy
            text="( 최대낙폭 )"
            color="var(--type-gray-2)"
            size="b1"
          />
        </TextRow>
        <TextRow style={{ alignItems: 'center', gap: '10px', height: '36px' }}>
          <TypoGraphy
            text="-₩ 1,243,000 "
            color="var(--type-gray-2)"
            size="t3"
          />
          <ToolTipWrap>
            <ImgContainer
              width="22px"
              onClick={() => setDisplay((prev) => !prev)}
            >
              <Img src={QuestionMark} />
            </ImgContainer>
            <ToolTip display={display} />
          </ToolTipWrap>
        </TextRow>
      </TextWrap>
    </WhiteBox>
  );
};

const WhiteBox = styled.div<{
  width?: string;
  height?: string;
  padding?: string;
  borderColor?: string;
}>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  border: ${(props) => `3.5px solid ${props.borderColor}` || 'none'};
  padding: ${(props) => props.padding || '30px 40px'};
  border-radius: 20px;
  background: var(--type-white);
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatusBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const StatusCircle = styled.div<{ color?: string }>`
  border-radius: 100%;
  width: 13px;
  height: 13px;
  background-color: ${(props) => props.color || 'none'};
`;

const ToolTipWrap = styled.div`
  width: 22px;
  height: 36px;
  padding: 13px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export { WhiteBox, WhiteSmallBox };
