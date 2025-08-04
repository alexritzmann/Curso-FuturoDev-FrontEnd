
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home/Home"
import Contador from "./pages/Contador/Contador"
import Form from "./pages/CadastroProduto/Form"

function App() {
  <Routes>
    <Route path="/" Component={Home} />
    <Route path="/contador" Component={Contador} />
    <Route path="/cadastro" Component={Form} />
  </Routes>
}

export default App;
