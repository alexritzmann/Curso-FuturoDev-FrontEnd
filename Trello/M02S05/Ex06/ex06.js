// ex06.js
document.addEventListener('DOMContentLoaded', function() 
{
  const formulario = document.getElementById('meuFormulario');
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');
  const emailErro = document.getElementById('email-erro');
  const senhaErro = document.getElementById('senha-erro');

  function validarEmail() 
  {
    const email = emailInput.value;
    if (!email.includes('@')) 
    {
      emailErro.textContent = 'O email deve conter "@"';
      return false;
    }else
    {
      emailErro.textContent = '';
      return true;
    }
  }

  function validarSenha() 
  {
    const senha = senhaInput.value;
    if (senha.length < 6) 
    {
      senhaErro.textContent = 'A senha deve ter no mínimo 6 caracteres';
      return false;
    } else 
    {
      senhaErro.textContent = '';
      return true;
    }
  }

  emailInput.addEventListener('input', function() 
  {
    if (this.value.trim() === '') 
    {
      emailErro.textContent = '';
    }else
    {
      validarEmail();
    }
  });

  senhaInput.addEventListener('input', function() 
  {
    if (this.value.trim() === '') 
    {
      senhaErro.textContent = '';
    }else 
    {
      validarSenha();
    }
  });

  emailInput.addEventListener('blur', validarEmail);
  senhaInput.addEventListener('blur', validarSenha);


  formulario.addEventListener('submit', function(event) 
  {
    let emailValido = validarEmail();
    let senhaValida = validarSenha();
    
    if (!emailValido || !senhaValida) 
    {
      window.alert('Por favor, corrija os erros antes de enviar o formulário.');
      event.preventDefault();
    }
  });
});
