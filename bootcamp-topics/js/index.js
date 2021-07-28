class Topic {

    constructor(name, rating = 3) {
        this.name = name;
        this.rating = rating;
    }

}
let topics = [
    new Topic("Git/GitHub", 4),
    new Topic("SQL", 5),
    new Topic("Java", 5),
    new Topic("Html/Css/Js", 2),
    new Topic("jQuery", 4),
    new Topic("Bootstrap", 5)
];

const displayTopics = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let topic of topics) {
        let tr = "<tr>";
        tr += `<td>${topic.name}</td>`;
        tr += `<td>${topic.rating}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
};