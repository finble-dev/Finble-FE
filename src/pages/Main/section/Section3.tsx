import TypoGraphy from '../../../components/Typography';
import {
  Container,
  ImgContainer,
  Img,
  TextRow,
  TextWrap,
} from '../../../assets/styles/styles';
import mainSub2 from '../../../assets/img/main/mainSub2.svg';
import mainSub3 from '../../../assets/img/main/mainSub3.svg';

const Section3 = () => {
  return (
    <Container padding="180px 0 218px 0">
      <TextWrap lineHeight={45} align="center">
        <TypoGraphy text="마음 편히 주식 투자하는 방법," size="h1" />
        <TextRow align="center">
          <TypoGraphy text="핀블의 '" size="h1" />
          <TypoGraphy text="투자 실험" size="h1" color="var(--main-blue)" />
          <TypoGraphy text="'을 소개합니다." size="h1" />
        </TextRow>
      </TextWrap>
      <TextWrap lineHeight={20} align="center" padding="45px 0 120px 0">
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
          text="앞으로 어떻게 투자해야할지 미리 알아보세요."
        />
      </TextWrap>
      <TextRow>
        <ImgContainer width="100%" height="100%" style={{ gap: '20px' }}>
          <Img width="520px" src={mainSub2} />
          <Img width="520px" src={mainSub3} />
        </ImgContainer>
      </TextRow>
    </Container>
  );
};
export default Section3;
