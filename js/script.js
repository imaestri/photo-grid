let globalCardEmoticon = document.querySelector(".card-emoticon");
let countLike = 0;

globalCardEmoticon.addEventListener("click", () => {

    globalCardEmoticon.innerHTML= `
        <div class="card-body">
        <p class="card-emoticon">❤ Curtida! </p>
        </div>
        `;  

        countLike += 1;
        console.log(countLike); 

});

