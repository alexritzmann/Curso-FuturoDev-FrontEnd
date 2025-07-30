

const itensMenu = ["Home", "Sobre", "Contato"];

const menuElement = document.getElementById("menu");
const menuNav = document.createElement("nav");
const menuUl = document.createElement("ul");

menuNav.textContent = "Menu";

menuNav.appendChild(menuUl);

menuElement.appendChild(menuNav);



for (let i = 0; i < itensMenu.length; i++) 
{
  const menuLi = document.createElement("li");
  menuLi.textContent = itensMenu[i];
  menuUl.appendChild(menuLi);
}

