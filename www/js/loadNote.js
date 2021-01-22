var localStorageLength = localStorage.length + 1;


if (localStorageLength != 1) {
    for (var i = 0; i < localStorageLength; i++) {
        var lsItem = JSON.parse(localStorage.getItem(`${i+1}`));
        if (lsItem != null) {
            $(".note-item-container").append(
                `<div class="note-item">
                <a class="note-item-href" href="./view.html?id=${i+1}">
                    <p class="note-title">${lsItem.title}</p>
                    <hr class="note-item-hr">
                    <p class="note-des">${lsItem.des}</p>
                </a>
                </div>`
            );
            i+=1;
        } else {
            i+=1;
            continue;
        }    
    }
}