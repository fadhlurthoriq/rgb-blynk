const picker = document.getElementById("picker");
const preview = document.getElementById("preview");
const hexValue = document.getElementById("hexValue");

let debounceTimer;

picker.addEventListener("input", () => {

    const hex = picker.value;

    // Preview langsung
    preview.style.background = hex;

    // Glow mengikuti warna
    preview.style.boxShadow =
        `0 0 30px ${hex}`;

    // Tampilkan kode hex
    hexValue.innerText =
        hex.toUpperCase();

    // Debounce
    clearTimeout(debounceTimer);

    debounceTimer =
        setTimeout(() => {

            sendColor(hex);

        }, 300);

});

async function sendColor(hex){

    const r =
        parseInt(hex.substring(1,3),16);

    const g =
        parseInt(hex.substring(3,5),16);

    const b =
        parseInt(hex.substring(5,7),16);

    try{

        await fetch("/api/rgb",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                r:r,
                g:g,
                b:b
            })

        });

    }
    catch(error){

        console.log(error);

    }

}