async function setColor(color, state){

    await fetch('/api/rgb', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            color:color,
            state:state
        })
    });

}