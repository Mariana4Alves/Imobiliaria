import styled from 'styled-components';

const Container = styled.div`
    padding: 12px;
    height: 22px;
    text-align: center;
    align-items: center;
    border-radius: 40px;
    border-top-right-radius: 0;
    background: rgb(34, 133, 253);
    color: #fff; 
    cursor: pointer;
    ${(props) => props.fullRadius && `    border-radius: 40px;
    `}
`;

const Title = styled.h3`
    font-family: 'Khula', sans-serif;
    padding-bottom: 12px;
    margin: 0;
font-size: 14px;
`;

const RadiusButton = ({ onPress, title, fullRadius }) => {
    return (
        <Container onClick={() => onPress()} fullRadius={fullRadius}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}

export default RadiusButton;