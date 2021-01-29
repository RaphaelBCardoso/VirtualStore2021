import React, {useEffect, useState} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import {BuyButton} from '../style'
//import Button from '@material-ui/core/Button';
//import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';

//import 'primeicons/primeicons.css'
//import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primereact/resources/primereact.css';

//import {Menu} from 'primereact/menu'
//import {Button} from 'primereact/button'

import Header from '../Header'
import Footer from '../Footer'

import './categoria.css'

import * as CategoriaApi from './categoriaApi'
import * as ProdutoApi from '../Produto/produtoApi'

export default function CategoriaScren() {
  const {id} = useParams()
  const history = useHistory()

  const [categorias, setCategorias] = useState([])
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    carregarCategorias()
  }, [])

  async function carregarCategorias() {
    const dados = await CategoriaApi.getAll()
    setCategorias(dados)
  }

  useEffect(() => {
    carregarProdutos()
  }, [id])

  async function carregarProdutos() {
    const dados = await ProdutoApi.get(id)
    setProdutos(dados)
  }

  return (
    <>
      <Header />
      <nav>
      <a href="/carrinho"><BuyButton isPrimary={true}>Ver Carrinho</BuyButton></a>
      </nav>
      <section>
        <aside>
            Informações do Produto

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. At risus viverra adipiscing at in. Malesuada fames ac turpis egestas. Leo vel orci porta non pulvinar neque laoreet suspendisse. Tincidunt eget nullam non nisi. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Ultricies mi eget mauris pharetra et ultrices neque. Pretium nibh ipsum consequat nisl vel. Gravida in fermentum et sollicitudin. Praesent tristique magna sit amet purus. Tempus quam pellentesque nec nam aliquam sem et tortor. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Turpis egestas integer eget aliquet nibh. Arcu dictum varius duis at consectetur lorem donec massa.</p>
            <a href="/carrinho"><BuyButton isPrimary={true}>Comprar</BuyButton></a>
        </aside>
      </section>
      <Footer />  
    </>
  )
}