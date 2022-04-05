import styled from 'styled-components';

const Container = styled.div`
    padding: 6px 20px;
    height: 22px;
    text-align: center;
    align-items: center;
    border-radius: 40px;
    border-color: rgb(34, 133, 253);
    border-width: 2px;
    border-style: solid;
    color: rgb(34, 133, 253); 
    cursor: pointer;
    width: fit-content;
`;

const Title = styled.h3`
    font-family: 'Khula', sans-serif;
    padding-bottom: 12px;
    margin: 0;
    font-size: 14px;
`;

const OutlineButton = ({ onPress, title }) => {
    return (
        <Container onClick={() => onPress()}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}

export default OutlineButton;