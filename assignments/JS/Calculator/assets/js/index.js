const keys = [];

for (let i = 0; i < 17; i++) {
    keys[i] = $('.keys '.indexOf(i));
    let key = keys[i].text()
    document.getElementsByClassName("keys")[i].addEventListener('click', function () {
        console.log(document.getElementsByClassName("keys")[i].textContent);
    });
}
