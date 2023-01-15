import styled from 'styled-components';
import del from '../../../assets/img/lab/del.svg';
import { ETFList } from '../../../assets/ETFList';
import TypoGraphy from '../../../components/Typography';

interface addedItem {
  listNum: number;
  itemNum: number;
  ETFValue: Array<Array<Number>>;
  changeETFValue: (listNum: number, itemNum: number, e: any) => void;
  changeFlag: (listNum: number, itemNum: number) => void;
}

export const AddedItem = ({
  listNum,
  itemNum,
  ETFValue,
  changeETFValue,
  changeFlag,
}: addedItem) => {
  let item = ETFList[listNum][itemNum];
  return (
    <Container>
      <Img
        src={del}
        onClick={() => {
          changeFlag(listNum, itemNum);
        }}
      />
      <Box>
        <Row>
          <Profile src={item.img} />
          <Column>
            <TypoGraphy
              text={item.name}
              color="var(--main-blue)"
              size="t3"
              style={{ marginBottom: '5px' }}
            />
            <TypoGraphy
              text={item.intro}
              color="var(--type-gray-2)"
              size="b4"
            />
          </Column>
        </Row>

        <InputBox>
          <InputArea
            value={String(ETFValue[listNum][itemNum])}
            onChange={(e) => {
              changeETFValue(listNum, itemNum, e);
            }}
          />
          <TypoGraphy text="%" size="input" color="var(--type-gray-3)" />
        </InputBox>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 103px;
  margin-bottom: 22px;
`;

const Box = styled.div`
  display: flex;
  width: 495.6px;
  height: 103px;
  align-items: center;
  justify-content: space-between;
  padding: 21px;

  background: #f6f8ff;
  border-radius: 10px;
`;

const Img = styled.img`
  height: 28px;
  width: 28px;
  margin-right: 18px;
  cursor: pointer;
`;

const Profile = styled.img`
  height: 58px;
  width: 58px;
  margin-right: 18px;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 89px;
  height: 38px;
  background: #ffffff;
  border: 0.910972px solid #dedede;
  border-radius: 5.46583px;
  padding: 15px 10px;
  font-size: var(--fs-input);
  font-weight: var(--fw-input);
`;

const InputArea = styled.input`
  width: 100%;
  font-size: var(--fs-input);
  font-weight: var(--fw-input);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--type-gray-5);
  }
`;
