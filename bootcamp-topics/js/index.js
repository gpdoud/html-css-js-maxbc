class Topic {
    constructor(name, rating = 3) {
        this.name = name;
        this.rating = rating;
    }
}
let topics = [
];

const remove = () => {
    let name = document.getElementById("name").value;
    let idx = -1;
    for(let i in topics) {
        if(name.toLowerCase() === topics[i].name.toLowerCase()) {
            idx = i;
            break;
        }
    }
    if(idx == -1) {
        alert("Topics not found");
    } else {
        topics.splice(idx, 1);
    }
    displayTopics();
};

const add = () => {
    let nameCtrl = document.getElementById("name");
    let ratingCtrl = document.getElementById("rating");
    let topic = new Topic(nameCtrl.value, ratingCtrl.value);
    topics.push(topic);
    displayTopics();
};

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