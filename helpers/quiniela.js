const socket = io();
const tbody  = document.getElementsByTagName('tbody')[0];

socket.emit('quiniela', {});

socket.on('quiniela', datos => {
    tbody.textContent = "";
    datos.forEach((resultado) => {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = resultado;
        tr.append(td);
        tbody.append(tr);
    });        
});
