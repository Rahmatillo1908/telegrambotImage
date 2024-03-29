const btn = document.querySelector(".centered-submit")
const bot = {
    TOKEN: "7189851748:AAHUkasQUab0GQtTet27Kv-mZGVdJg70RkY",
    chatID: "6079824118",
}
const form = document.querySelector("form")
form.addEventListener("submit", e => {
    e.preventDefault();
    const imageUrl = document.querySelector(".image").value;
    const text = document.querySelector(".text").value;
    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendPhoto?chat_id=${bot.chatID}&photo=${imageUrl}&caption=${text}`)
        .then(succ => {
            console.log(succ);
        }, err => {
            console.log(err);
        })
})