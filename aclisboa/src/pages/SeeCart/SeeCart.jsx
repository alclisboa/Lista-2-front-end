import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import "./SeeCart.scss"
import Announcement from '../../components/Announcement/Announcement'
const SeeCart = () => {
    return (
        <div className='SeeCart'>
            <Navbar />
            <Announcement />
            <div className="SeeCartPag">
                Ver carrinho
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default SeeCart
