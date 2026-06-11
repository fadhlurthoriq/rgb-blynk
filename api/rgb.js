export default async function handler(req,res){

    const token =
    process.env.BLYNK_TOKEN;

    const { r,g,b } =
    req.body;

    await fetch(
        `https://blynk.cloud/external/api/update?token=${token}&V0=${r}`
    );

    await fetch(
        `https://blynk.cloud/external/api/update?token=${token}&V1=${g}`
    );

    await fetch(
        `https://blynk.cloud/external/api/update?token=${token}&V2=${b}`
    );

    res.status(200).json({
        success:true
    });

}