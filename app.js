function valentinePage() {
    window.location.href = "index.html";
}

function noPage() {
    window.location.href = "no.html";
}

function yesPage() {
    window.location.href = "yes.html";
}


function moveButton() {
    const noBtn = document.getElementById('noButton')

    noBtnRect = noBtn.getBoundingClientRect();
    var maxX = window.innerWidth - noBtnRect.width;
    var maxY = window.innerHeight - noBtnRect.height;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    setTimeout(() => {
        noBtn.style.transition = "left 2s, top 2s";
        noBtn.style.left = "";
        noBtn.style.top = "";
      }, 10000); 
}
