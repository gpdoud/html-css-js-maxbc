

$(() => {
    let urlParms = parseUrl();
    let id = +urlParms.id;
    vendorGetByPk(id)
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => {
            $("#message").html("<b>Vendor not found!</b>");
            console.error(err);
        });
    $("#dSave").on("click", () => {
        change();
    });
});

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
};

const change = () => {
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
    
    vendor.id = +vendor.id; //vendor.id = Number(vendor.id)
    console.debug("B4:", vendor);
    vendorChange(vendor)
        .done(res => {
            console.debug(res);
            console.log("Change successful!");
            $("#message").html("<b>Change Successful!");
            window.location.href = "../getall/vendor-getall.html";
        })
        .fail(err => {
            console.error(err);
            $("#message").html("<b>Change Failed!</b>");
        });
};