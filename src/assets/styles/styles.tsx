import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 5rem 0;
`;

const ImgContainer = styled.div<{ width?: string }>`
  width: ${(props) => props.width || '70%'};
  display: flex;
  align-items: flex-end;
  justify-contents: center;
`;
const Img = styled.img`
  width: 100%;
`;

export { Container, ImgContainer, Img };
