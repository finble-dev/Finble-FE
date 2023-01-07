import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import {
  Container,
  TextRow,
  TextWrap,
  Row,
} from '../../../assets/styles/styles';
import mainSub2 from '../../../assets/img/mainSub2.png';
import mainSub3 from '../../../assets/img/mainSub3.png';

const Answer = () => {
  return (
    <Container>
      <div style={{ marginTop: '-158px' }}></div>
      <TextWrap lineHeight={60} align="center" padding="185px 0 0 0">
        <TypoGraphy text="마음 편히 주식 투자하는 방법," size="h1" />
        <TextRow align="center">
          <TypoGraphy text="핀블의 '" size="h1" />
          <TypoGraphy text="투자 실험" size="h1" color="var(--main-blue)" />
          <TypoGraphy text="'을 소개합니다." size="h1" />
        </TextRow>
      </TextWrap>
      <TextWrap lineHeight={36} align="center" padding="45px 0 120px 0">
        <TextRow align="center">
          <TypoGraphy
            text="가상의 투자 결과"
            size="t3"
            color="var(--main-blue)"
          />
          <TypoGraphy text="를 바라보며" size="t3" color="var(--type-gray-2)" />
        </TextRow>
        <TypoGraphy
          size="t3"
          color="var(--type-gray-2)"
          text="'앞으로 어떻게 투자해야할지 미리 알아보세요."
        />
      </TextWrap>
      <Row>
        <img src={mainSub2} style={{ marginRight: '20px' }} />
        <img src={mainSub3} />
      </Row>
      <div style={{ marginBottom: '218px' }}></div>
    </Container>
  );
};
export default Answer;
