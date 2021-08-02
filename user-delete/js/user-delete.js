const baseurl = "http://localhost:5000/api/users";

$(() => {

    $("#zGet").on("click", () => {
        let id = $("#zId").val();
        getUserByPk(id);
    });
    $("#save").on("click", () => {
        let id = $("#zId").val();
        remove(id);
    });
});

const remove = (id) => {
    $.ajax({
        method: "DELETE",
        url: `${baseurl}/${id}`
    })
        .done(res => {
            console.log("Delete successful!");
        })
        .fail(
            err => console.error(err) 
        );
};

const getUserByPk = (id) => {
    $.getJSON(`${baseurl}/${id}`)
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => {
            console.error(err);
        });
};

const display = (user) => {
    $("#dId").text(user.id);
    $("#dUsername").text(user.username);
    $("#dFirstname").text(user.firstname);
    $("#dLastname").text(user.lastname);
    $("#dPhoneNumber").text(user.phoneNumber);
    $("#dEmail").text(user.email);
    $("#dReviewer").text(`${(user.isReviewer ? "Yes" : "No")}`);
    $("#dAdmin").text(`${(user.isAdmin ? "Yes" : "No")}`);
}