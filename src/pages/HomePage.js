import styled from 'styled-components';
import Dropdown from '../components/Dropdown';
import HouseCard from '../components/HouseCard';
import OutlineButton from '../components/OutlineButton';

const Body = styled.body`
  text-align: center;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    -webkit-box-shadow: 0px 0px 8px -3px #999999; 
    box-shadow: 0px 0px 8px -3px #999999;
    padding: 8px;
    padding-right: 250px;
    padding-left: 250px;
    border-radius: 20px;
`;
 const Space = styled.div`
 width: 40px;
 `

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
            <Flex>
                    <Dropdown title={'Cidade'} options={[{ title: 'option 1', onClick: () => null }, { title: 'option 2', onClick: () => null }, { title: 'option 3', onClick: () => null }, { title: 'option 4', onClick: () => null }]} />
                    <Dropdown title={'Cidade'} options={[{ title: 'option 1', onClick: () => null }, { title: 'option 2', onClick: () => null }, { title: 'option 3', onClick: () => null }, { title: 'option 4', onClick: () => null }]} />
                    <Dropdown title={'Cidade'} options={[{ title: 'option 1', onClick: () => null }, { title: 'option 2', onClick: () => null }, { title: 'option 3', onClick: () => null }, { title: 'option 4', onClick: () => null }]} />
<Space />
                <OutlineButton title={'Teste'} onPress={() => null} />
            </Flex>
        </Body>
    )
}

export default HomePage;