const statusDiv = document.querySelector('#status');
const p = document.createElement('p');
const dropdownItems = document.querySelectorAll(".dropdown-item");


dropdownItems.forEach(element => {
    element.addEventListener('click', ()=> {
        p.textContent = `Valor seleccionado: ${element.textContent}`;
        p.style.marginTop = '20px';
        statusDiv.appendChild(p);
    })
})