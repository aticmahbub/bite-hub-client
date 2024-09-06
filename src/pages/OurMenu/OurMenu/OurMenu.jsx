import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuBg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Our menu</title>
            </Helmet>
            <Cover
                img={menuBg}
                title='our menu'
            />
            <PopularMenu></PopularMenu>
            <Cover
                img={menuBg}
                title='our menu'
            />
            <PopularMenu></PopularMenu>
            <Cover
                img={menuBg}
                title='our menu'
            />
            <PopularMenu></PopularMenu>
            <Cover
                img={menuBg}
                title='our menu'
            />
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default OurMenu;