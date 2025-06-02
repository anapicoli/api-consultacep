// algumas horas vão atrapalhar pra voce ver o negocio da feira?
// podemos nos encontrar naquele beco do sesc, perto de santo amaro
// o pai da ana me deixa lá geralmente, ai seria mais tranquilo de ninguem ver

let button = document.getElementById("btn-cep")

button.addEventListener("click", function(event){
    event.preventDefault()

    let cep = document.getElementById("input_cep").value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error)) 
})