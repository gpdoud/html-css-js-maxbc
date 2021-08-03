
const parseUrl = () => {
    let url = document.URL;
    let urlParts = url.split("?");
    console.log(urlParts);
    let parmsString = urlParts[1];
    let kvpairs = parmsString.split("&");
    console.log(kvpairs);
    let urlParm = {};
    for(let kv of kvpairs) {
        let keyValue = kv.split("=");
        let key = keyValue[0];
        let value = keyValue[1];
        console.log("Key is", key, ", Value is", value);
        urlParm[key] = value;
    }
    console.log(urlParm);
}