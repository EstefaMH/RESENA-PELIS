function inputSearch(){
    let text = document.getElementById('input-search').value;

    localStorage.setItem('busqueda' , text);
    console.log(text);

    return text;
}

