import styled from 'styled-components';
import { Img, ImgContainer } from '../../../assets/styles/styles';
import del from '../../../assets/img/lab/del.svg';
import TypoGraphy from '../../../components/Typography';
import { SERVER } from '../../../network/config';
import { useAppSelect } from '../../../store/configStore.hooks';
import { tokenState } from '../../../store/slice/userSlice';

const StockBox = ({ stock }: { stock: any }) => {
  const token = useAppSelect(tokenState);

  const price = parseInt(stock.present_val).toLocaleString('ko-KR');
  const gain = parseInt(stock.gain).toLocaleString('ko-KR');
  let profit_rate = stock.profit_rate.toFixed(2);

  const DeleteStock = (id: number) => {
    fetch(`${SERVER}/portfolio/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: id }),
    });
  };

  return (
    <Container>
      <ImgContainer
        width="28px"
        onClick={() => DeleteStock(stock.portfolio.id)}
      >
        <Img src={del} style={{ cursor: 'pointer' }} />
      </ImgContainer>
      <BlueBox>
        <TextWrap>
          <TypoGraphy text={stock.stock_detail.name} size="b2" />
          <TypoGraphy
            text={stock.portfolio.quantity + '주'}
            color="var(--type-gray-2)"
            size="b2"
          />
        </TextWrap>
        <TextWrap align="right">
          <TypoGraphy
            text={price + '\u00A0원'}
            color="var(--type-gray-2)"
            size="b2"
          />
          <TypoGraphy
            text={gain + '(' + profit_rate + '%)'}
            color="#4492F7"
            size="b2"
          />
        </TextWrap>
      </BlueBox>
    </Container>
  );
};

export default StockBox;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
`;

const BlueBox = styled.div`
  background: #f6f8ff;
  width: 100%;
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 22px;
  margin: 11px 0;
  border-radius: 10px;
`;

const TextWrap = styled.div<{ align?: string }>`
  text-align: ${(props) => props.align || 'left'};
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
