console.log("Ok!");

const move = () => {
    let val = document.getElementById("inp").value;
    document.getElementById("lbl").value = val;
    if(val.toString() === "123") {
        document.getElementById("lbl").style.color = "green";
    }
    if(val.toString() === "321") {
        document.getElementById("lbl").style.color = "red";
    }
}