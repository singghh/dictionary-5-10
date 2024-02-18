async function fetchdata(){
    const val=document.getElementById("search").value.toLowerCase();
    const phone=document.getElementById("phone");
    const d=document.getElementById("sub-def");
    const x=document.getElementById("exam");
    const par=document.getElementById("part");
    const speak=document.getElementById("speaker");
    try{
        const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`)
        if(!response.ok){
            throw new Error("Not found")
        }
        const data=await response.json();
        const phonetic=data[0].phonetics[0].text;
        phone.innerText=phonetic;
        const ex=data[0].meanings[0].definitions[0].example
        const def=data[0].meanings[0].definitions[0].definition
        const part=data[0].meanings[0].partOfSpeech
        d.innerText=def
        x.innerText=ex
       
        const audi=data[0].phonetics[1].audio
        var s=new Audio(`${audi}`);
        s.play();
        par.innerText=part.capitalize()
    }
    catch(error){
        console.error(error)
    }
}

