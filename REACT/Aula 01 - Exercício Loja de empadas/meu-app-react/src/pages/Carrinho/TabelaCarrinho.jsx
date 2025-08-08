import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import moneyFormat from "../../utils/moneyFormat";

import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";

function TabelaCarrinho({ carrinho }) {
  function somarTotal() {
    let total = 0;
    carrinho.map((item) => {
      total = total + Number(item.price);
    });
    return total;
  }

  return (
    <>
      <List>
        {carrinho.map((empada, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {empada.isVegan === true ? (
                <GrassOutlinedIcon />
              ) : (
                <DinnerDiningOutlinedIcon />
              )}
            </ListItemIcon>
            <ListItemText>{empada.name}</ListItemText>
            {moneyFormat(empada.price)}
          </ListItem>
        ))}

        <ListItem>
          <ListItemIcon>
            <DinnerDiningOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Empada de carne</ListItemText>
          R$ 12,00
        </ListItem>
      </List>

      <div>
        <span>Total: {moneyFormat(somarTotal())}</span>
        <Button variant="contained" endIcon={<WhatsApp />}>
          Enviar pedido
        </Button>
      </div>
    </>
  );
}

export default TabelaCarrinho;
