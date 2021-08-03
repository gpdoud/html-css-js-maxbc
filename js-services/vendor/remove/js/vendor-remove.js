let vendorId = 0;

$(() => {

    $("#zGet").on("click", () => {
        vendorId = $("#zId").val();
        console.debug("Id is", vendorId);
        vendorGetByPk(vendorId)
        .done(res => {
            console.debug(res);
            display(res);
            message("Ready");
        })
        .fail(err => {
            console.error(err);
            message("Not found!");
        });
    });
    $("#save").on("click", () => {
        let id2 = $("#zId").val();
        console.debug("Id2 is", id2);
        vendorRemove(vendorId)
            .done(res => {
                console.debug(res);
                console.log("Delete successful!");
                message("Delete Successful!");
            })
            .fail(err => {
                console.error(err);
                message("Delete Failed!");
            });
    });
});

const message = (str) => {
    $("#message").html(`<b>${str}</b>`);
}

const display = (vendor) => {
    $("#dId").val(vendor.id);
    $("#dCode").val(vendor.code);
    $("#dName").val(vendor.name);
    $("#dAddress").val(vendor.address);
    $("#dCity").val(vendor.city);
    $("#dState").val(vendor.state);
    $("#dZip").val(vendor.zip);
    $("#dPhoneNumber").val(vendor.phoneNumber);
    $("#dEmail").val(vendor.email);
}