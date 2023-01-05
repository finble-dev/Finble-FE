import styled from 'styled-components';

// Container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1200px;
`;

// Text
const TextWrap = styled.div<{
  lineHeight?: number;
  padding?: string;
  align?: string;
}>`
  padding: ${(props) => props.padding || 0};
  line-height: ${(props) => props.lineHeight || 44.99}px;
  text-align: ${(props) => props.align || 'left'};
`;
const TextRow = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
`;

//Img
const ImgContainer = styled.div<{ width?: string }>`
  width: ${(props) => props.width || '70%'};
  display: flex;
  align-items: flex-end;
  justify-contents: center;
`;
const Img = styled.img`
  width: 100%;
`;

export { Container, ImgContainer, Img, TextWrap, TextRow };
