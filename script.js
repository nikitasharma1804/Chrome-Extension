fetch('https://icanhazdadjoke.com/slack')
.then(data =>data.json())
.then(Quotedata =>{
    const quotetext=Quotedata.attachments[0].text;
    const quoteelement=document.getElementById('quoteelement');
    quoteelement.innerHTML=quotetext;
})