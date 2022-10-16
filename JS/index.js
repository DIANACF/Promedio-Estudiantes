let estudiantes = [
    {
        nombre: 'Juan',
        programa: 'Ingeniería de Sistemas',
        materia: [
            {
                nombre: 'Matematicas',
                nota: [{
                    nombre: 'actividad 1',
                    calificacion:   10
                }]
            }    
        ]
        
    }];

    function numeroProgramaaTexto(programa){
        switch(programa){
            case 0:
                return 'Ingeniería de Software';
            case 1:
                return 'Ingeniería de Multimedia';
            case 2:
                return 'Ingeniería de Sistemas';
        }
    }


document.getElementById('btnRegistrarEstudiante').addEventListener('click', () => {
    let formulario = document.getElementById('formularioEstudiante');
    
    let estudiante = {
        nombre: formulario['nombre'].value,
        programa: numeroProgramaaTexto(formulario['programa'].value),
        materia: [
            {
                nombre: formulario['materia'].value,
                nota: []
            }
        ]
    };
    estudiantes.push(estudiante);

});

