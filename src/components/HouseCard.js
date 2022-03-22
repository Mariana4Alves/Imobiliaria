import styled from "styled-components";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { GiResize } from "react-icons/gi";

const Container = styled.div`
  background: #fff;
  border-radius: 20%;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 15%;
  margin-left: 14%;
  padding: 8px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const Content = styled.div`
  align-items: flex-end;

`;

const FlexContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

`;

const NegMargin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 16px;
`;

const IconsView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RegularText = styled.p`
  font-family: 'Khula', sans-serif;
  font-size: 14px;
  margin: 0px;
`;

const PriceText = styled.p`
  font-family: 'Khula', sans-serif;
  line-height: 12px;
  font-size: 18px;
  font-weight: 600;
  margin: 0px;
`;

const Image = styled.img`
  border-radius: 20%;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;  
  margin-bottom: 16px;
`;

const Space = styled.div`
  width: 8px;
  ${(props) => props.minor && 'width: 4px;'}
  ${(props) => props.neg && 'margin-bottom: -28px;'}

`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 16px;
`;

const HouseCard = (
  { priceText,
    title,
    subtitle,
    bedQuantity,
    bathQuantity,
    size,
    href }
) => {
  return (
    <Container>
      <Image src={href} width={'97%'} height={'50%'} alt="" />
      <Content>
        <FlexContent>
          <PriceText>  </PriceText>
          <PriceText>R${priceText} </PriceText>

        </FlexContent>
        <FlexContent>
          <ContentText>
            <PriceText> {title} </PriceText>
            <RegularText> {subtitle} </RegularText>
          </ContentText>
          <NegMargin>
            <Space />
            <FlexContent>
              <IconsView>
                <BiBed />             
                <Space minor />
                <RegularText> {bedQuantity} </RegularText>
                <Space />
              </IconsView>
              <IconsView>
                <BiBath /> <Space minor /><RegularText> {bathQuantity} </RegularText>
                <Space />
              </IconsView>
            </FlexContent>


            <IconsView>
              <GiResize />  <Space minor /><RegularText> {size} </RegularText>
              <Space />
            </IconsView>

          </NegMargin>



        </FlexContent>
      </Content>
    </Container >
  );
};

export default HouseCard;
