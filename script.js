
let comments = [
    {
        name: "Vito Kraus",
        date: " 12. 16.2023. 10:23",
        text: "toto je opravdu skvele..😉"
    },
    {
        name: "Filip Másilko",
        date: "12. 9. 2023. 19:21",
        text: "strasne se mi to libi😍"
    },
    {
        name: "Filip Másilko",
        date: "12. 9. 2023. 19:21",
        text: "strasne se mi to libi😍"
    },
    {
        name: "Filip Másilko",
        date: "12. 9. 2023. 19:21",
        text: "strasne se mi to libi😍"
    },
    {
        name: "Filip Másilko",
        date: "12. 9. 2023. 19:21",
        text: "strasne se mi to libi😍"
    },

];

let commentsAll = document.getElementById("comments");

comments.forEach(comment => {
    let commenty = document.createElement("div");
    commenty.classList.add("comment");

    let autor = document.createElement("div");
    autor.classList.add("commentautor");
    autor.textContent = comment.name;

    let date = document.createElement("div");
    date.classList.add("date");
    date.textContent = comment.date;

    let text = document.createElement("p");
    text.textContent = comment.text;

    commenty.appendChild(autor);
    commenty.appendChild(date);
    commenty.appendChild(text);

    commentsAll.appendChild(commenty);
});
