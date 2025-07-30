

const textarea = document.getElementById('textarea');
const contador = document.getElementById('contador');
/*
textarea.addEventListener('input', () => 
{
    contador.textContent = 250-textarea.value.length;
    if (textarea.value.length > 250) 
    {
        textarea.value = textarea.value.substring(0, 250);
    }
    if (textarea.value.length == 250) 
    {
        contador.textContent = "limite atingido";
    }
});
*/
/*------------ OUTRA FORMA ----------*/

textarea.addEventListener('keyup', () => 
{
    contador.textContent = 250-textarea.value.length;
    if (textarea.value.length > 250) 
    {
        textarea.value = textarea.value.substring(0, 250);
    }
    if (textarea.value.length == 250) 
    {
        contador.textContent = "limite atingido";
    }
});