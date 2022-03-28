import styled from 'styled-components';

const Container = styled.div`
    padding: 12px;
    height: 25px;
    text-align: center;
    align-items: center;
    border-radius: 40px;
    border-top-right-radius: 0;
    background: rgb(34, 133, 253);
    color: #fff; 
    cursor: pointer;
`;

const Title = styled.h3`
    font-family: 'Khula', sans-serif;
    padding-bottom: 12px;
    margin: 0;

`;

const RadiusButton = ({ onPress, title }) => {
    return (
        <Container onClick={() => onPress()}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}

export default RadiusButton;