
import './App.css'
import Navbar from './components/navbar/Navbar'
import PorQueInvestir from './components/pqInvestir/PorQueInvestir'
import Produtos from './components/Produtos/produtos'
import About from './components/sobreNos/About'
import Orcamento from './components/budget/Orcamento'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
    <div className='container-header'>
      <header id='header'>
        <h1>Energia Solar 365</h1>
        <h3>Economize com Sol. Invista no seu futuro!</h3>
        <div id='div-navbar-menu'>
          <Navbar />
        </div>
      </header>
      <main>
        <div className='container'>

        <section id='sobre-nos' className='container-sobre-nos'>
          <About/>
          
        </section>

        <section id='porque-investir' className='container-pq-investir'>
          <h2>Por que investir em Energia Solar?</h2>
          
            <div className='card-pq-investir'>
              <PorQueInvestir 
                title='Redução da Conta'
                descripition='Economize até 90% na conta de energia elétrica'/>
              <PorQueInvestir 
                title='Sustentabilidade'
                descripition='Energia limpa e renovável, ajudando o planeta'/>
              <PorQueInvestir 
                title='Valorização do Imóvel'
                descripition='Residências com placas solares aumentam até 10% no valor de mercado'/>
              <PorQueInvestir 
                title='Retorno Garantido'
                descripition='Payback em 4-6 anos e economia mensal garantida'/>
            </div>
          
        </section>

        <section id='produtos' className='container-produtos'>
          <h2>Nossos Produtos</h2>
          
            <div className='card-produtos'>
              
              <Produtos 
                name='Placa Solar 400 W'
                descripition='Economize até 90% na conta de energia elétrica'
                imagem = 'https://www.galaxcms.com.br/imgs_crud_comum/2906/Painel-Solar-20200514010802.jpg'/>
              <Produtos 
                name='Kit Solar Completo'
                descripition='Inclui placas, inversor, estrutura, cabos e instalação profissional'
                imagem = 'https://acdn-us.mitiendanube.com/stores/003/582/147/products/kit-2-01b81ec3cc32f68a4a17315318326853-1024-1024.jpg'/>
              <Produtos 
                name='Inversor Solar'
                descripition='Transforma energia solar em energia elétrica para sua casa'
                imagem = 'https://canalsolar.com.br/wp-content/uploads/2022/03/canal-solar-Inversor-solar-o-que-e-e-pra-que-serve-2.jpg'/> 
            </div>
          
        </section>

        <section id='orcamento' className='container-budget'>
          <h2>Solicite seu Orçamento</h2>
          <Orcamento/>

        </section>

      </div>
      </main>

      <footer>
        <div>
          <Footer/>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
