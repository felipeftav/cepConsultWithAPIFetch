const cep = document.querySelector("#cep");
const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let search = cep.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((e) => {
      alert('Nao encontramos esse CEP em nossa base de dados.\nTente outro CEP!');
    });
});

const showData = (result) => {
  for (let campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};
