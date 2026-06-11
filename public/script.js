const preview =
document.getElementById("preview");

const hexValue =
document.getElementById("hexValue");

let debounceTimer;

const colorPicker =
new iro.ColorPicker("#picker", {

    width: 280,

    color: "#ff0000",

    borderWidth: 2,

    borderColor: "#ffffff"

});

colorPicker.on("color:change", function(color){

    const hex = color.hexString;

    preview.style.background = hex;

    preview.style.boxShadow =
    `0 0 40px ${hex}`;

    hexValue.innerText =
    hex.toUpperCase();

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {

        sendColor(color);

    },300);

});

async function sendColor(color){

    const r = color.rgb.r;
    const g = color.rgb.g;
    const b = color.rgb.b;

    try{

        const response =
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

        console.log(
            "RGB Sent:",
            r,g,b
        );

    }
    catch(error){

        console.error(error);

    }

}