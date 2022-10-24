var contenido = document.querySelector('#contenido');
function traer() {

    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            contenido.innerHTML =
                `
                <article id="contenedor">
                <img src="${data.results[0].picture.large}" width="160px" ">
                <p><b> ${data.results[0].login.username}</b></p>
                <i>Recomienda esta tienda</i>
                </article>
                `
        })
}
setInterval(traer, 5000)
