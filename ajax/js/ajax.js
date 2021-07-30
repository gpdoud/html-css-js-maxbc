

$(() => {
    console.log("Everything is ready!");
    getUserById(15);
});

const getUserById = (id) => {
    $.getJSON(`http://localhost:5000/api/users/${id}`)
        .done(res => { 
            console.debug(res); 
            displayUser(res);
        })
        .fail(err => {
            console.error(err);
        });
};

const getAllUsers = () => {
    $.getJSON(`http://localhost:5000/api/users`)
    .done(res => {
        console.debug(res);
        display(res);
    })
    .fail(err => {
        console.error(err);
    });
}

const displayUser = (user) => {
    $("#dId").html(`<b>${user.id}</b>`);
    $("#dUsername").text(`${user.username}`);
    $("#dFirstname").text(`${user.firstname}`);
    $("#dLastname").text(`${user.lastname}`);
    $("#dPhoneNumber").text(`${user.phoneNumber}`);
    $("#dEmail").text(`${user.email}`);
    $("#dReviewer").text(`${(user.isReviewer ? "Yes" : "No")}`);
    $("#dAdmin").text(`${(user.isAdmin ? "Yes" : "No")}`);
}

const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users) {
        let tr = $("<tr></tr>");
        tr.append( $(`<td>${user.id}</td>`) );
        tr.append( $(`<td>${user.username}</td>`) );
        tr.append( $(`<td>${user.firstname} ${user.lastname}</td>`) );
        tr.append( $(`<td>${user.phoneNumber}</td>`) );
        tr.append( $(`<td>${user.email}</td>`) );
        tr.append( $(`<td>${(user.isReviewer ? "Yes" : "No")}</td>`) );
        tr.append( $(`<td>${(user.isAdmin ? "Yes" : "No")}</td>`) );
        tbody.append(tr);
    }
};