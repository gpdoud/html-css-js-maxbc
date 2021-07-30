

$(() => {

    $("#save").on("click", () => {
        add();
    });

});

const add = () => {
    let newUser = {
        id: 0,
        username: $("#xUsername").val(),
        password: $("#xPassword").val(),
        firstname: $("#xFirstname").val(),
        lastname: $("#xLastname").val(),
        phoneNumber: $("#xPhoneNumber").val(),
        email: $("#xEmail").val(),
        isReviewer: $("#xReviewer").prop("checked"),
        isAdmin: $("#xAdmin").prop("checked")
    }

    $.ajax({
        method: "POST",
        url: "http://localhost:5000/api/users",
        data: JSON.stringify(newUser),
        contentType: "application/json"
    })
        .done(res => {
            console.debug(res, " - Added!");
        })
        .fail(err => {
            console.error(err);
        });
};