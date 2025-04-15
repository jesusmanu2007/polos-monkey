

document.getElementById('formulario-contacto').addEventListener('submit', async function (e) {
    e.preventDefault(); 

    
    const nombre = document.querySelector('#formulario-contacto input[placeholder="Nombre"]').value;
    const correo = document.querySelector('#formulario-contacto input[placeholder="Correo"]').value;
    const mensaje = document.querySelector('#formulario-contacto textarea[placeholder="Mensaje"]').value;

    
    try {
        const response = await fetch('http://localhost:3000/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, correo, mensaje })
        });

        const data = await response.json();
        alert(data.mensaje); 
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        alert('Hubo un error al enviar el mensaje.');
    }
});

document.getElementById('formulario-login').addEventListener('submit', async function (e) {
    e.preventDefault(); 

    
    const usuario = document.querySelector('#formulario-login input[placeholder="Usuario"]').value;
    const contraseña = document.querySelector('#formulario-login input[placeholder="Contraseña"]').value;

    
    try {
        const response = await fetch('http://localhost:3000/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usuario, contraseña })
        });

        const data = await response.json();
        alert(data.mensaje); 
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        alert('Hubo un error al enviar los datos de inicio de sesión.');
    }
});



