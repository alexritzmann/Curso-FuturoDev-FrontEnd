
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState , useEffect } from "react";

import Header from "../../components/Header"
import ItemCardapio from "../../components/ItemCardapio"
import Footer from "../../components/Footer"
import ItemFeedback from "../../components/ItemFeedback"

import "./Home.css";

function Home() {
  const [produtoEmpadas, setProdutoEmpadas] = useState([]);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    link.integrity =
      "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==";
    link.crossOrigin = "anonymous";
    link.referrerPolicy = "no-referrer";

    document.head.appendChild(link);

    const empadas = JSON.parse(localStorage.getItem("empadas")) || [];
    setProdutoEmpadas(empadas);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Nosso Cardápio Tech</h2>
          <div className="container-cardapio">
            {produtoEmpadas.map((empada, index) => (
              <ItemCardapio
                key={index}
                title={empada.nameEmpada}
                descripition={empada.descriptionEmpada}
                price={empada.priceEmpada}
              />
            ))}

            {/* MÉTODO ANTIGO DE CADASTRO DE EMPADAS (MANUAL) 
        <ItemCardapio 
          title="Empada de carne" 
          descripition="Empada de carne deliciosa com carne de primeira" 
          price={10}
        />
        <ItemCardapio 
          title="Empada de frango" 
          descripition="Empada recheada com frango temperado e cremoso" 
          price={9}
        />
        <ItemCardapio 
          title="Empada de queijo" 
          descripition="Empada com queijo derretido e massa crocante" 
          price={8}
        />
        <ItemCardapio 
          title="Empada de camarão" 
          descripition="Empada especial com camarão fresco e temperos" 
          price={12}
        />
        <ItemCardapio 
          title="Empada vegetariana" 
          descripition="Empada recheada com legumes selecionados e especiarias" 
          price={9}
        />
        <ItemCardapio 
          title="Empada doce" 
          descripition="Empada doce com recheio de goiabada e queijo" 
          price={7}
        />
        */}
          </div>
        </section>
      </main>

      <Footer />

      <section className="feedback-section">
        <h2>FeedBack</h2>

        <ItemFeedback
          author="João Silva"
          comment="As empadas são incríveis! Recomendo a de frango."
        />
        <ItemFeedback
          author="João Silva"
          comment="As empadas são incríveis! Recomendo a de frango."
        />
        <ItemFeedback
          author="João Silva"
          comment="As empadas são incríveis! Recomendo a de frango."
        />
        <ItemFeedback
          author="João Silva"
          comment="As empadas são incríveis! Recomendo a de frango."
        />
      </section>
    </div>
  );
}

export default Home;
