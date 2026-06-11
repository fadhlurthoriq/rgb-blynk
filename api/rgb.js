export default async function handler(req,res){

    const token = process.env.BLYNK_TOKEN;

    const { color, state } = req.body;

    let pin = "";

    if(color === "red"){
        pin = "V0";
    }

    if(color === "green"){
        pin = "V1";
    }

    if(color === "blue"){
        pin = "V2";
    }

    const url =
    `https://blynk.cloud/external/api/update?token=${token}&${pin}=${state}`;

    await fetch(url);

    res.status(200).json({
        success:true
    });

}