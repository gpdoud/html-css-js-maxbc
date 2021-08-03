const baseurl = "http://localhost:5000/api/vendors";

const vendorGetAll = () => {
    return $.getJSON(`${baseurl}`);
}

const vendorGetByPk = (id) => {
    return $.getJSON(`${baseurl}/${id}`);
}

const vendorCreate = (vendor) => {
    return $.ajax({
        method: "POST",
        url: `${baseurl}`,
        data: JSON.stringify(vendor),
        contentType: 'application/json'
    });
}

const vendorChange = (vendor) => {
    return $.ajax({
        method: "PUT",
        url: `${baseurl}/${vendor.id}`,
        data: JSON.stringify(vendor),
        contentType: 'application/json'
    });
}

const vendorRemove = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `${baseurl}/${id}`
    });}
