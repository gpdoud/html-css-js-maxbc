const baseurl = "http://localhost:5000/api/users";

$(() => {

    $("#getid").on("click", ()=> {
        var id = $("#zId").val();
        getByPk(id);
    });

    $("#save").on("click", () => {
        let user = {};
        getFromPage(user);
        updateUser(user);
    });

});

const updateUser = (user) => {
    // user.id = Number(user.id);
    user.id = +user.id;
    console.log(user);
    $.ajax({
        method: "PUT",
        url: `${baseurl}/${user.id}`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done(res => {
            console.log("Update successful!");
        })
        .fail(err => {
            console.error(err);
        });
};

const getFromPage = (user) => {
    user.id = $("#xId").val();
    user.username = $("#xUsername").val();
    user.password = $("#xPassword").val();
    user.firstname = $("#xFirstname").val();
    user.lastname = $("#xLastname").val();
    user.phoneNumber = $("#xPhoneNumber").val();
    user.email = $("#xEmail").val();
    user.isReviewer = $("#xReviewer").prop("checked");
    user.isAdmin = $("#xAdmin").prop("checked");  
}

const display = (user) => {
    $("#xId").val(user.id);
    $("#xUsername").val(user.username);
    $("#xPassword").val(user.password);
    $("#xFirstname").val(user.firstname);
    $("#xLastname").val(user.lastname);
    $("#xPhoneNumber").val(user.phoneNumber);
    $("#xEmail").val(user.email);
    $("#xReviewer").prop("checked", user.isReviewer);
    $("#xAdmin").prop("checked", user.isAdmin);
};

const getByPk = (id) => {
    $.getJSON(`${baseurl}/${id}`)
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => { 
            console.error(err); 
        });
}