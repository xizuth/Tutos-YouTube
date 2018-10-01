((d)=>{

    const img = d.getElementById('slide');

    let index = 1 ;
    
    setInterval(()=>{
        img.src = `img/hill${index}.jpg`
        index++; //incrementa la variable en 1

        if(index === 4) index = 1;//reset
    },2000);
})(document);