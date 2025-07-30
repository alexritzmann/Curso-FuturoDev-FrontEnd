
import './About.css'

function About() {
  

  return (
    <>
        <article id='article-about'>
            <h2>Sobre Nós</h2>
            <div>
                <figure id='figure-about'>
                    <img className='img-about' src="https://microgeracaofv.wordpress.com/wp-content/uploads/2019/04/solarpanelsorangeroofheader-717x300.jpg" alt="Teto com placa solar instalada" />
                    <figcaption>Somos a Energia Solar 365, refência em projetos sustentáveis. Instalamos e gereciamos sistemas residenciais, comerciais e rurais com alta eficiência e confiabilidade.</figcaption>
                </figure>
            </div>
            <div>
                <h2>Dados do Mercado Brasileiro (até 2025)</h2>
                <ul className='list-about'>
                    <li><strong>Economia na conta de luz:</strong> até 90%</li>
                    <li><strong>Payback médio:</strong> 4 a 6 anos</li>
                    <li><strong>Redução de COCO<sub>2</sub>:</strong> ~1,5tCO<sub>2</sub> por sistema/ano</li>
                    <li><strong>Sistemas conectados:</strong> mais de 400.000 (fonte: ANEEL, abril/2025)</li>
                </ul>
            </div>
        </article>
        
    </>
  )
}

export default About
