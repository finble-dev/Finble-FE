import styled from 'styled-components';
import { TextWrap } from '../../../assets/styles/styles';
import TypoGraphy from '../../../components/Typography';
import { ETF } from '../../../interface/interface';
import { Btn10 } from '../../../components/Button';

interface ETFItem {
  item: ETF;
  ETFFlag: Array<Array<{ symbol: string; flag: boolean }>>;
  onChangeETF: any;
  listNum: number;
  itemNum: number;
}

export const ETFItem = ({
  item,
  ETFFlag,
  onChangeETF,
  listNum,
  itemNum,
}: ETFItem) => {
  return (
    <Container>
      <Row style={{ justifyContent: 'space-between' }}>
        <Row>
          <Profile src={item.img} />
          <Column>
            <TypoGraphy text={item.name} size="t3" />
            <TypoGraphy
              text={item.intro}
              color="var(--type-gray-2)"
              size="b4"
            />
          </Column>
        </Row>

        {ETFFlag[listNum][itemNum].flag ? (
          <Btn10 text={'추가됨'} type="disable_add" />
        ) : (
          <div
            onClick={() => {
              onChangeETF(listNum, itemNum);
            }}
          >
            <Btn10 text={'추가하기'} type="add" />
          </div>
        )}
      </Row>
      <TextWrap lineHeight={26}>
        {item.detail.map((item: string, idx: number) => (
          <TypoGraphy
            text={item}
            color="var(--type-gray-2)"
            size="b2"
            key={`ETFITEM_${idx}`}
          />
        ))}
      </TextWrap>
      <TypoGraphy
        text={item.hashTag}
        color="var(--main-blue)"
        size="b2"
        style={{ marginTop: '23px' }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 531px;
  height: 259px;
  margin-top: 20px;
  background: #f6f8ff;
  border-radius: 10px;
  padding: 26px 30px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 17px;
`;

const Profile = styled.img`
  height: 58px;
  width: 58px;
`;
