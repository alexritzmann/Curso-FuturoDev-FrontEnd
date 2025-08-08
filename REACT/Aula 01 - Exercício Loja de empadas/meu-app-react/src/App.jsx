
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home/Home"
import Contador from "./pages/Contador/Contador"
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto"
import Header from "./components/Header"
import Contato from "./pages/Contato/Contato"
import Footer from "./components/Footer"
import Feedback from "./pages/Feedback/Feedback"
import Carrinho from "./pages/Carrinho/Carrinho"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contador" Component={Contador} />
        <Route path="/cadastro" Component={CadastroProduto} />
        <Route path="/contato" Component={Contato} />
        <Route path="/feedback" Component={Feedback} />
        <Route path="/carrinho" Component={Carrinho} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
