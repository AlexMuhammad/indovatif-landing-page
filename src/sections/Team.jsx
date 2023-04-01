import React from 'react';
import CardTeam from '../components/CardTeam';
import Slider from 'react-slick';
import mufti from "../assets/img/mufti.png";
import Rifqi from "../assets/img/rifqi.png";
import Alex from "../assets/img/alek.png";
import Pojan from "../assets/img/fauzan.png";
import Taufiq from "../assets/img/taufiq.png";
import Rois from "../assets/img/rois.png";

function Team() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = [
        {
            id: 1,
            name: "Muhammad Mufti Ashidiqqi",
            position: "Chief Technology Officer",
            image: mufti
        },
        {
            id: 2,
            name: "Muh. Alex S",
            position: "Techlead",
            image: Alex
        },
        {
            id: 3,
            name: "Bang Rendra",
            position: "CMO",
            image: mufti
        },
        {
            id: 4,
            name: "Rois No Debat",
            position: "CEO",
            image: Rois
        },
        {
            id: 5,
            name: "Taufiq Alfianto",
            position: "CFO",
            image: Taufiq
        },
        {
            id: 5,
            name: "Rifqi Padi Siliwangi",
            position: "Marketing Manager",
            image: Rifqi
        },
        {
            id: 5,
            name: "Pojan",
            position: "Desingner",
            image: Pojan
        },
    ]
    return (
        <div className='max-w-full mt-[100px] overflow-hidden'>
            <div className='w-full container mx-auto'>
                <h1 className='text-[40px] font-bold text-center'><span className='text-red-500'>Our</span> Team</h1>
                <Slider {...settings}>
                    {data?.map((item, idx) => (
                        <CardTeam key={idx} data={item} />
                    ))}
                    {/* <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div> */}
                </Slider>
                {/* <CardTeam /> */}
            </div>
        </div>
    )
}

export default Team