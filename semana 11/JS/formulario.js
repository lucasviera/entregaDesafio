document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();  
        const formData = new FormData(formulario);
        const url ='https://jsonplaceholder.typicode.com/users';
     
        let error;
        fetch(url, {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json',
        },
       })
       .then(response=> {
        if(!response.ok){
            throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
       })
       .then(data =>{
        console.log('nueva publicacion creada',data);
       })
       .catch(e =>{
        error = e;
        console.error('Error:',error)
       });
    });
});
