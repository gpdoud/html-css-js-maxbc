let nbr = 0;

$(() => {

    $("div, #inp").css("text-align", "center");

    $("#minus").on("click", () => {
        nbr--;
        display();
    });
    $("#plus").on("click", () => {
        nbr++;
        display();
    });

});

const display = () => {
    $("#inp").val(nbr);
    $("#inp").css("color", (nbr % 2 == 0 ? "red" : "black"))
                .css("fontWeight", (nbr % 3 == 0 ? "bold" : "normal"))
                .css("fontStyle", (nbr % 5 == 0 ? "italic" : "normal"));
}