import styled from "styled-components";
import RadiusButton from "./RadiusButton";


const Container = styled.div`
  padding-horizontal: 5%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Pressable = styled.div`
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.h3`
    font-family: 'Khula', sans-serif;
    color: rgb(146,146,146);
    margin-horizontal: 20%;
    font-size: 14px;
    ${(props) => props.blue && `    color: rgb(34, 133, 253);
    `}
`;

const Header = (
    { url,
        buttons,
        onPressRadiusButton,
        setIndexHover, indexHover }
) => {
    return (
        <Container>
            <img src={url} alt="Logo" width="100" height="100" />
            {buttons.map((item, index) => {
                return (
                    <>
                        <Pressable onClick={() => setIndexHover(index)}>
                            <Title blue={indexHover === index}>
                                {item}
                            </Title>
                        </Pressable>
                    </>

                )
            })}
            <RadiusButton title={'Entrar'} onPress={onPressRadiusButton} />
        </Container>
    );
};

export default Header;
