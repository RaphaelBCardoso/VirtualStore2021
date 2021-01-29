import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {BuyButton} from '../style'

import Header from '../Header'
import Footer from '../Footer'

import './carrinho.css'

export default function CarrinhoScren() {

  return (
    <>
      <Header />
      <nav>
      <BuyButton isPrimary={true}>Pagar</BuyButton>
      </nav>
      <section>
        <aside>
            Carrinho de Compras

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. At risus viverra adipiscing at in. Malesuada fames ac turpis egestas. Leo vel orci porta non pulvinar neque laoreet suspendisse. Tincidunt eget nullam non nisi. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Ultricies mi eget mauris pharetra et ultrices neque. Pretium nibh ipsum consequat nisl vel. Gravida in fermentum et sollicitudin. Praesent tristique magna sit amet purus. Tempus quam pellentesque nec nam aliquam sem et tortor. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Turpis egestas integer eget aliquet nibh. Arcu dictum varius duis at consectetur lorem donec massa.</p>
        </aside>
      </section>
      <Footer />  
    </>
  )
}