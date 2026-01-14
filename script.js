async function buscarCEP() {
  let cep = document.getElementById("cep").value;

  // Validação do CEP
  if (cep.length !== 8 || isNaN(cep)) {
    alert("CEP inválido!");
    return;
  }

  try {
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let data = await response.json();

    if (data.erro) {
      alert("CEP não encontrado!");
      return;
    }

  
    document.getElementById("resultado").innerHTML = `
      <p><strong>Endereço:</strong> ${data.logradouro}</p>
      <p><strong>Bairro:</strong> ${data.bairro}</p>
      <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
    `;
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    alert("Erro ao buscar CEP. Tente novamente mais tarde.");
  }
}
