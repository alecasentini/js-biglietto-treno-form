function calcoloPrezzo(){

    let kilometri  = document.getElementById('kilometri').value;
    let eta  = document.getElementById('eta').value;
    let prezzo = kilometri * 0.21;

if ( eta < 18 ){
        prezzoTotale = prezzo * 0.80 
        document.getElementById("prezzo-biglietto").innerHTML = prezzoTotale.toFixed(2);
    }

else if( eta >= 65 ){
        prezzoTotale = prezzo * 0.60 
        document.getElementById("prezzo-biglietto").innerHTML = prezzoTotale.toFixed(2);
    }

else{
        prezzoTotale = prezzo
        document.getElementById("prezzo-biglietto").innerHTML = prezzoTotale.toFixed(2);
}

}

function clear(){
    document.getElementById("prezzo-biglietto").value = '';
}