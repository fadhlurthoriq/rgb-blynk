const picker =
document.getElementById("picker");

const preview =
document.getElementById("preview");

picker.addEventListener("input", () => {
    preview.style.background =
    picker.value;
});

async function sendColor(){

    const hex = picker.value;

    const r =
    parseInt(hex.substr(1,2),16);

    const g =
    parseInt(hex.substr(3,2),16);

    const b =
    parseInt(hex.substr(5,2),16);

    await fetch("/api/rgb",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            r,g,b
        })
    });

}