import React, { useEffect, useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';


const PopularMenu = () => {
    const menu = useMenu()
    const popularItems = menu.filter(item => item.category ==='popular')

    // const [products, setProducts] = useState()

    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(popularItems)
    //         })
    // }, [])
    return (
        <section className='mb-12'>
            <SectionTitle subheading="From our menu" heading="Popular  Items" />
        <div className='grid md:grid-cols-2 gap-10'>
            {
                popularItems?.map((product, idx) => <MenuItem
                key={idx}
                product={product}
                />)
            }
        </div>
        </section>
    );
};

export default PopularMenu;