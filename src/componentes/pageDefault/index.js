import React from 'react';
//import PropTypes from 'prop-types';
import Menu from '../menu';
import Footer from '../Footer';
import styled, {css} from 'styled-components';


const Main = styled.main`
    color: var(--white);
    background-color: var(--darkbckground);
    flex: 1;
    padding-top: 125px;
    padding-left: 5%;
    padding-right: 5%;
    ${({paddingAll}) =>  css `
        padding: ${paddingAll}
    `}
`;

const PageDefault = ({ children, paddingAll }) => {
    return(
        <>
            <Menu/>
                <Main paddingAll={paddingAll}>
                    {children}
                </Main>
            <Footer/>
        </>
     
    );
}

export default PageDefault;
