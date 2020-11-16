function obliczZuzycie () {
    let moc = document.getElementById('moc').value.replace(',', '.')
    let czas = document.getElementById('czas').value.replace(',', '.')
    let koszt = document.getElementById('koszt').value.replace(',', '.')
    let wynik = moc * koszt * czas / 1000
    document.getElementById('minuty').checked && (wynik = wynik / 60)
    document.getElementById('dni').checked && (wynik = wynik * 24)
    document.getElementById('wynik').innerHTML = wynik;
}

function obliczMoc () {
    let cosFi = 0.8
    let pierwiastekZtrzech = 0.00173205
    let napiecieVolt = 400
    let wynik = document.getElementById('natezenie').value.replace(',', '.') * napiecieVolt * pierwiastekZtrzech * cosFi
    document.getElementById('wynik2').innerHTML = wynik;
}

window.onload = function(){
    document.getElementById('zuzycie').addEventListener('click', obliczZuzycie)
    document.getElementById('moc_wynik').addEventListener('click', obliczMoc)
 };