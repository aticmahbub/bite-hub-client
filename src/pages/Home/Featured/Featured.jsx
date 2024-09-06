import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img from '../../../assets/home/featured.jpg'
import './styles.css'
const Featured = () => {
    return (
        <section className='featured text-white pt-10 bg-fixed'>
            <SectionTitle subHeading='check it out' heading='Featured Item'/>
            <div className=' md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-30'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta soluta, tempore est delectus aspernatur cupiditate blanditiis sit? Doloremque, ullam accusantium.</p>
                    <button className='btn btn-outline mt-4 border-0 border-b-4'>Order now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;