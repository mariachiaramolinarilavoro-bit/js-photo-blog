/* CONSEGNA

Milestone 1

Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: concentriamoci su HTML e CSS riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

Milestone 2

Utilizzando Postman, testiamo una chiamata a questo endpoint: 

https://lanciweb.github.io/demo/api/pictures/

Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

Milestone 3

Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

Font utilizzati:

titoli:  ‘Edu Tas Beginner’, sans-serif;d
ate: ‘Sometype Mono’, ‘monospace’;
(Dovreste sapere a questo punto cosa e come prendere da Google Fonts… )

Bonus

rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata

Note

Non siete obbligati a usare Bootstrap: siete liberi di decidere come gestire lo stile 

Note  svolgimento:

Tickets: Durante questa ultima fase, il supporto tickets mattina e pomeriggio sara' limitato a fornire solo delucidazioni sulla traccia e funzionamento del sito da realizzare ma non di carattere technico, per fixare bugs vari sarete in autonomia, come a lavoro! ,
 Importante!! Non usare l'intelligenza artificiale per svolgere l'esercizio ,

Buon Lavoro e buon divertimento! */

const callPostman = 'https://lanciweb.github.io/demo/api/pictures/'

const rowEl = document.querySelector('.row')
console.log(rowEl);

fetch(callPostman)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        console.log(data.url);
        data.forEach(singleData => {
            const { url, date, title } = singleData    //destrutturazione
            console.log(url);

            rowEl.innerHTML += `
                <div class="col col-sm-6 col-md-6 col-xl-4 g-4">
                    <div class="card" style="width: 18rem;">
                        <img class="pin" src="./assets/img/pin.svg" alt="pin">
                        <img src="${url}" class="card-img-top" alt="bunny-fuzzy">
                        <div class="card-body">
                            <span>${date}</span>
                            <h2>${title}</h2>
                        </div>
                    </div>
                </div> `

        })
        const imgEl = document.querySelectorAll('.card-img-top')

        console.log(imgEl);
        
        imgEl.forEach(singleImg => {
            singleImg.addEventListener('click', function () {
                document.getElementById("overlay").style.display = "block";
            })

        })
        console.log(imgEl);

    })


const buttonEl = document.querySelector('button')

buttonEl.addEventListener('click', function () {
    document.getElementById("overlay").style.display = "none";
})


