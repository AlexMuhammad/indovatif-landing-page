import React from 'react'
import Slider from 'react-slick'
import Card from '../components/CardPortfolio';

function Portfolio() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }]
    };
    const data = [
        {
            title: "tesfdgtestes",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aut voluptatibus fuga eos debitis modi! At exercitationem officiis sint voluptatem.",
            img: "../assets/img/robot.png"
        },
        {
            title: "tesfdgtestes",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aut voluptatibus fuga eos debitis modi! At exercitationem officiis sint voluptatem.",
            img: "../assets/img/robot.png"
        },
        {
            title: "tesfdgtestes",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aut voluptatibus fuga eos debitis modi! At exercitationem officiis sint voluptatem.",
            img: "../assets/img/robot.png"
        },
    ]
    return (
        <div className='max-w-full mt-[100px] overflow-hidden'>
            <div className='container w-full text-center'>
                <h1 className='text-[40px] font-bold'><span className='text-red-500'>Portfolio</span> Us</h1>
            </div>
            <Slider {...settings} className='md:mt-[80px]'>
                {data?.map((item, ind) => (
                    <Card key={ind} data={item} />
                ))}
            </Slider>
        </div>
    )
}

export default Portfolio