var submitBtn = document.querySelector('#submit-button');
var titleInput = document.querySelector('input[name="title"]');
var desInput = document.querySelector('textarea.des');
var lsLen = localStorage.length + 1; 


submitBtn.addEventListener('click', handleSubmit);

function handleSubmit() {
    saveNote(titleInput.value, desInput.value);
    showToast('.toast');
    goHomeTimeout(2000);
    
}


function saveNote(title, des) {
    localStorage.setItem(`${lsLen}`, `{"title":  "${addSlashes(title)}", "des": "${addSlashes(des)}", "date": "${new Date().toString()}"}`);
}

function showToast(query) {
    $(query.toString()).fadeIn(400).delay(1500).fadeOut(400);
}

function goHomeTimeout(milliseconds) {
    setTimeout(() => {
        location.href = './index.html';
    }, milliseconds);
}