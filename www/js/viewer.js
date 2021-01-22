const params = new URLSearchParams(document.location.search);
const id = params.get('id');
const lsItem = JSON.parse(localStorage.getItem(`${id}`));

$(".main-title > .title").html(`${lsItem.title}`);
$(".des-container").html(`${lsItem.des}`);