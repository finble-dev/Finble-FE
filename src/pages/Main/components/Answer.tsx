import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';

const Answer = () => {
  return (
    <Container>
      <TypoGraphy
        text="마음 편히 주식 투자하는 방법!"
        size="h2"
        style={{ marginTop: '10px' }}
      />
      <TextRow>
        <TypoGraphy text="핀블의 '" size="h2" style={{ marginTop: '10px' }} />
        <TypoGraphy
          text="투자 실험"
          size="h2"
          color="#6792F8"
          style={{ marginTop: '10px' }}
        />
        <TypoGraphy
          text="'을 소개합니다."
          size="h2"
          style={{ marginTop: '10px' }}
        />
      </TextRow>

      <TypoGraphy
        text="가상의 투자 결과를 바라보며"
        size="h3"
        style={{ marginTop: '38px' }}
      />
      <TypoGraphy
        text="'앞으로 어떻게 투자해야할지 미리 알아보세요"
        size="h3"
        style={{ marginTop: '5px' }}
      />
      <Row />
    </Container>
  );
};
export default Answer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 400px;
`;

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
`;
