function calcoloPrezzo(){
    let nomeCognome = document.getElementById('nome').value;
    let kilometri  = document.getElementById('kilometri').value;
    let eta  = document.getElementById('eta').value;
    let prezzo = kilometri * 0.21;

if ( eta < 18 ){
        prezzoTotale = prezzo * 0.80 
        document.getElementById("prezzo-biglietto").innerHTML = prezzoTotale.toFixed(2);
        document.getElementById("tipo-biglietto").innerHTML = "Tariffa Young";
    }

else if( eta >= 65 ){
        prezzoTotale = prezzo * 0.60 
        document.getElementById("prezzo-biglietto").innerHTML = prezzoTotale.toFixed(2);
        document.getElementById("tipo-biglietto").innerHTML = "Tariffa Senior";
    }

else{
        prezzoTotale = prezzo
        document.getElementById("prezzo-biglietto").innerHTML = prezzoTotale.toFixed(2);
        document.getElementById("tipo-biglietto").innerHTML = "Tariffa Standard";
}

    document.getElementById("riepilogo-nome").innerHTML = nomeCognome;
    
    let x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("carrozza").innerHTML = x;

    let y = Math.floor((Math.random() * 36) + 1);
    // var charset = "ABCDEF";
    // let z = Math.random(charset)
    var anysize = 1;
    var charset = "ABCDEF"; 
        z="";
    for( var i=0; i < anysize; i++ )
        result += charset[Math.floor(Math.random() * charset.length)];
    document.getElementById("posto").innerHTML = y + z;

    document.getElementById("riepilogo").style.display = "block";
    document.getElementById("biglietto").style.display = "flex";
    document.getElementById("pulsanti").style.display = "flex";

}
