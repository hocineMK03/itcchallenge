import React from 'react'
import { FaSignal } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import '../../styles/landingpage/features.css'
const Features1 = () => {
  return (
    <section className='feature'>

    <h2>Why choose our training courses?</h2>
    <p>Each course is carefully crafted by recognized professionals in their field and renowned content creators. By registering with us, you are guaranteed to learn from the best, benefiting from their expertise and years of experience. Don’t pass up the opportunity to enrich your knowledge with experts who are not only passionate, but also dedicated to your success.”</p>
    <div className='features'>
        <div className='features-comp' id='feature1'>
            <div ><FaSignal /></div>
            <h3>Suitable for all levels</h3>
            <p>Rich and flexible, our programs are suitable for everyone</p>
        </div>
        <div className='features-comp' id='feature2'>
            <div><FaSignal /></div>
            <h3>Based on practice</h3>
            <p>At the end of each training you will have to carry out a practical project</p>
        </div>
        <div className='features-comp' id='feature3'>
            <div><FaRegHeart /></div>
            <h3>Passionate trainers</h3>
            <p>Our trainers are professionals who are passionate about their fields.</p>
        </div>
        <div className='features-comp' id='feature4'>
            <div><FaHandshake /></div>
            <h3>Ongoing support</h3>
            <p>We will always be there for you after the training.</p>
        </div>
    </div>
    </section>
  )
}

export default Features1
