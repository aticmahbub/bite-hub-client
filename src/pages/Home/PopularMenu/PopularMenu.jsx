import React, { useEffect, useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const PopularMenu = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category ==='popular')
                setProducts(popularItems)
            })
    }, [])
    return (
        <section className='mb-12'>
            <SectionTitle subheading="From our menu" heading="Popular  Items" />
        <div className='grid md:grid-cols-2 gap-10'>
            {
                products?.map(product => <MenuItem
                key={product.id}
                product={product}
                />)
            }
        </div>
        </section>
    );
};

export default PopularMenu;