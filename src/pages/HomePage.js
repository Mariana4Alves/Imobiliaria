import styled from 'styled-components';
import HouseCard from '../components/HouseCard';

const Body = styled.body`
  text-align: center;
`;

const HomePage = ({ hasBeenAutenticated }) => {
    return (
        <Body>
            {hasBeenAutenticated && (
                <h4>logado</h4>
            )}
            <HouseCard priceText={'10.0000'}
                title={'Residence'}
                subtitle={'Kansas, UF'}
                bedQuantity={'4'}
                bathQuantity={'2'}
                size={'123'}
                href={'https://www.teclasap.com.br/wp-content/uploads/2009/09/house-1.jpg'} />
            <HouseCard priceText={'10.0000'}
                title={'Residence'}
                subtitle={'Kansas, UF'}
                bedQuantity={'4'}
                bathQuantity={'2'}
                size={'123'}
                href={'https://www.teclasap.com.br/wp-content/uploads/2009/09/house-1.jpg'} />
        </Body>
    )
}

export default HomePage;