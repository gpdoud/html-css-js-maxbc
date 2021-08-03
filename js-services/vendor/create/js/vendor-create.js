

$(() => {
    $("#dSave").on("click", () => {
        create();
    });
});

const create = () => {
    let vendor = {};
    vendor.id = $("#dId").val();
    vendor.code = $("#dCode").val();
    vendor.name = $("#dName").val();
    vendor.address = $("#dAddress").val();
    vendor.city = $("#dCity").val();
    vendor.state = $("#dState").val();
    vendor.zip = $("#dZip").val();
    vendor.phoneNumber = $("#dPhoneNumber").val();
    vendor.email = $("#dEmail").val();
    
    vendorCreate(vendor)
        .done(res => {
            console.debug(res);
            console.log("Create successful!");
        })
        .fail(err => console.error(err));
};