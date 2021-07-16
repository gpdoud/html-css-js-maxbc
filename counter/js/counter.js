let nbr = 0;

const change = (amt) => {
    nbr += amt;
    display(nbr);
}
const display = (n) => {
    let ctrl = document.getElementById("nbr");
    ctrl.value = n;
    ctrl.style.color = (n % 2 == 0) ? "red" : "black";
    ctrl.style.fontStyle = (n % 3 == 0) ? "italic" : "normal";
    ctrl.style.fontWeight = (n % 5 == 0) ? "bold" : "normal";
}