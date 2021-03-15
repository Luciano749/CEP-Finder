let input = document.getElementsByTagName("input")[0];

const search = () => {
  let results = document.querySelectorAll("#container h1");

  if (input.value.length >= 8) {
    let api = `https://viacep.com.br/ws/${input.value}/json/`;
    let request = new XMLHttpRequest();

    request.open("GET", api);

    request.onload = () => {
      let address = JSON.parse(request.responseText);

      if (address.erro != true) {
        results[0].innerHTML =
          "<span>Cidade:</span>" + " " + address.localidade;
        results[1].innerHTML = "<span>Bairro:</span>" + " " + address.bairro;
        results[2].innerHTML = "<span>Rua:</span>" + " " + address.logradouro;
      } else {
        alert("erro");
      }
    };

    request.send();
  }
};

// ---------------------------------------------------------------- //

input.oninput = () => {
  var maxChars = 8;

  if (input.value.length > maxChars) {
    input.value = input.value.substr(0, maxChars);
  }
};
