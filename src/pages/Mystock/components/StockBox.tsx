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
        <div>
          <TypoGraphy text={stock.stock_detail.name} size="b2" />
          <TypoGraphy
            text={stock.portfolio.quantity + '주'}
            color="var(--type-gray-2)"
            size="b2"
          />
        </div>
        <div style={{ textAlign: 'right' }}>
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
        </div>
      </BlueBox>
    </Container>
  );
};

export default StockBox;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BlueBox = styled.div`
  background: #f6f8ff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 8px 0;
  border-radius: 10px;
`;
