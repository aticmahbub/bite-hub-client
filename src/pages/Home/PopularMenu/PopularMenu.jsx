import React, { useEffect, useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';


const PopularMenu = () => {
    const [menu] = useMenu()
    // const [popular, setPopular] = useState([]) 

    const popularItems = menu?.filter(item => item.category=== 'popular')
    // setPopular(popularItems)
    // console.log(popular);

    return (
        <section className='mb-12'>
            <SectionTitle subheading="From our menu" heading="Popular  Items" />
        <div className='grid md:grid-cols-2 gap-10'>
        {
            popularItems?.map(item => <MenuItem
            key={item._id}
            item={item}
            />)
        }
        </div>
        </section>
    );
};

export default PopularMenu;