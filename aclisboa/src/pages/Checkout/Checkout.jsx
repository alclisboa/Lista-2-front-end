import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import "./Checkout.scss"
const Checkout = () => {
    return (
        <div className='Checkout'>
            <Navbar />
            <Announcement />
            <div className="CheckoutPag">
                Finalizar compra
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Checkout
