import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import { WhatsApp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import moneyFormat from "../../utils/moneyFormat";
import styles from './Carrinho.module.css';

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("@carrinho")) || [];
    setCarrinho(storedCart);
  }, []);

  function somarTotal() {
    return carrinho.reduce((total, item) => total + Number(item.priceEmpada), 0);
  }

  function sendMessageWhatzap() {
    const numero = "47989192350";
    const quantidade = carrinho.length;
    const valor = moneyFormat(somarTotal());
    const mensagem = `Olá, desejo ${quantidade} empadas no valor de ${valor}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");

    window.alert("Pedido enviado com sucesso!");

    localStorage.removeItem("@carrinho");
    setCarrinho([]);
  }

  return (
    <Paper elevation={3} style={{ width: "50%", margin: "0 auto" }}>
      <h2>Suas empadas</h2>
      <List>
        {carrinho.map((empada, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {empada.isVegan ? (
                <GrassOutlinedIcon />
              ) : (
                <DinnerDiningOutlinedIcon />
              )}
            </ListItemIcon>
            <ListItemText>{empada.nameEmpada}</ListItemText>
            {moneyFormat(empada.priceEmpada)}
          </ListItem>
        ))}
      </List>
      <div className={styles.rodapeTabelaPedido}>
        <span>Total: {moneyFormat(somarTotal())}</span>
        <Button 
          onClick={sendMessageWhatzap} 
          variant="contained" 
          endIcon={<WhatsApp />}
        >
          Enviar pedido
        </Button>
      </div>
    </Paper>
  );
}

export default Carrinho;
