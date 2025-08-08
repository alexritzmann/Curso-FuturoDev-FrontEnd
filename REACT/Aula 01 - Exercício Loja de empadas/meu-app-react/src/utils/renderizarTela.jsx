
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";

function retornarIcone(isVegan) {
  return isVegan === true ? (
    <GrassOutlinedIcon />
  ) : (
    <DinnerDiningOutlinedIcon />
  );
}

export default retornarIcone;
