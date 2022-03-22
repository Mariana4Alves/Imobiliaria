import styled from "styled-components";
import { FaBeer } from "react-icons/fa";

const Container = styled.div``;
const FlexContent = styled.div`
  display: flex;
  flex-direction: row;
`;
const RegularText = styled.p`
  font-family: Khula;
`;
const PriceText = styled.p`
  font-family: Khula;
`;

const HouseCard = (
  priceText,
  title,
  subtitle,
  bedQuantity,
  bathQuantity,
  size,
  href
) => {
  return (
    <Container>
      <img src={href} width={100} height={100} />
      <PriceText> {priceText} </PriceText>
      <FlexContent>
        <Content>
          <PriceText> {title} </PriceText>
          <RegularText> {subtitle} </RegularText>
        </Content>
        <FaBeer />
        <RegularText> {bedQuantity} </RegularText> <FaBeer />
        <RegularText> {bathQuantity} </RegularText> <FaBeer />
        <RegularText> {size} </RegularText>
      </FlexContent>
    </Container>
  );
};

export default HouseCard;
