
const itemImagem = document.getElementById('imagem');


itemImagem.addEventListener('mouseover', () => 
{
        itemImagem.src = 'https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/normalpx.jpg';

});

itemImagem.addEventListener('mouseout', () => 
{
        itemImagem.src = 'https://png.pngtree.com/element_our/20200702/ourmid/pngtree-mouse-hand-click-image_2281134.jpg';

});
