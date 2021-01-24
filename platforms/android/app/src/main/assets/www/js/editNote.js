const params = new URLSearchParams(document.location.search);
const id = params.get('id');
const lsItem = JSON.parse(localStorage.getItem(`${id}`));

$('input[name="title"]').val(lsItem.title);
$('textarea.des').val(lsItem.des);



$("#submit-button").click(handleSubmit);
$("#del-button").click(handleDelete);


function handleDelete() {
    deleteNote(id);
    $(".toast").html(`삭제완료, 이동중...`);
    showToast('.toast');
    goHomeTimeout(2000);
}

function handleSubmit() {
    saveNote($('input[name="title"]').val(), $('textarea.des').val());
    showToast('.toast');
    goHomeTimeout(2000);
    
}

function saveNote(title, des) {
    localStorage.setItem(`${id}`, `{"title":  "${addSlashes(title)}", "des": "${addSlashes(des)}", "date": "${new Date().toString()}"}`);
}

function deleteNote(id) {
    localStorage.removeItem(`${id}`);
}

function showToast(query) {
    $(query.toString()).fadeIn(400).delay(1500).fadeOut(400);
}

function goHomeTimeout(milliseconds) {
    setTimeout(() => {
        location.href = './index.html';
    }, milliseconds);
}

function addSlashes(string) {
    return string.replace(/\\/g, '\\\\').
        replace(/\u0008/g, '\\b').
        replace(/\t/g, '\\t').
        replace(/\n/g, '\\n').
        replace(/\f/g, '\\f').
        replace(/\r/g, '\\r').
        replace(/'/g, '\\\'').
        replace(/"/g, '\\"');
}