import { useState, useContext } from 'react';

import Header from '../components/Header';
import HomePage from '../pages/HomePage';

const PrincipalPage = () => {
    const [indexHover, setIndexHover] = useState(0);


    return (
        <>
            <Header url="https://cdn1.valuegaia.com.br/gaiasite/12334/TEMA.LOGOTIPO_TOPO_URL/d002d7c91df3825cc949f62685824618-Prancheta%201%20c%C3%B3pia%20copy%203.png" setIndexHover={setIndexHover} indexHover={indexHover} buttons={['Contatenos', 'Sobre', 'Casas']} onPressRadiusButton={() => null } />
            {
                indexHover === 0 && (
                    <HomePage hasBeenAutenticated={'true'} />
                )
            }
        </>

    );
}

export default PrincipalPage;
