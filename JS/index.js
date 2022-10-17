let indexEstudiante ;
let indexMateria ;

let estudiante = {

    nombre: 'NoAplica',
    programa: 'Multimedia',
    materia: {
        nombre: 'NoAplica',
        nota: []
    }
};
 


document.getElementById('btnRegistrarEstudiante').addEventListener('click', (e) => {
    
    let formulario = document.getElementById('formularioEstudiante');
    estudiante = {
        nombre: formulario['nombre'].value,
        programa: formulario['Programa'].value,
        materia: 
            {
                nombre: formulario['materia'].value,
                nota: []
            }
    };
        CerrarModalEstudiante();
        actualizardatosTablaEstudiante();
        
    });
    

function MostrarModalNota(){
    document.getElementById('contenedorModalFormNota').style.removeProperty('display');
};

function CerrarModalNota(){
    
    document.getElementById('contenedorModalFormNota').style.display = 'none';
};

function MostrarModalEstudiante(){
    document.getElementById('contenedorModalFormEst').style.removeProperty('display');
};

function CerrarModalEstudiante(){

    document.getElementById('contenedorModalFormEst').style.display = 'none';
};

function registrarNota(){
    let formulario = document.getElementById('formularioActividades');
    let nota = {
        nombre: formulario['actividad'].value,
        calificacion: formulario['nota'].value
    };
    estudiante.materia.nota.push(nota);
    CerrarModalNota();
    AñadirTablaNotas(formulario['actividad'].value,formulario['nota'].value,(estudiante.materia.nota.length - 1));
    actualizarPromedio();
}

function AñadirTablaNotas (actividad, nota, indexNota) {
    document.getElementById('tbody').innerHTML += '<tr><td>'+actividad+'</td><td>'+ nota +'</td><td><button class="btnEliminar" onclick="EliminarNota(' + indexNota + ')"><img src="https://prints.ultracoloringpages.com/9b08a89aa19886996cf1ad04a2c1cc84.png" width="60px" height="60px"></button></td></tr>';
};

function actualizarTabla(){
    document.getElementById('tbody').innerHTML = '';
    let notas = estudiante.materia.nota;
    for(let i = 0; i < notas.length; i++){
        
        AñadirTablaNotas(notas[i].nombre, notas[i].calificacion, i);
        
    
    }
    


};


function actualizarPromedio(){
    let notas = estudiante.materia.nota;
    let suma = 0;
    for(let index in notas){
        suma = parseFloat(suma) + parseFloat(notas[index].calificacion);
    }
    let promedio = suma/notas.length;
    document.getElementById('promedio').innerHTML = promedio.toFixed(3);
    aprobado(promedio);
    
};


function EliminarNota (indexNota){
    estudiante.materia.nota.splice(indexNota, 1);
    actualizarTabla();
    actualizarPromedio();
    
};

function actualizardatosTablaEstudiante(){
   let info = document.getElementById('informacionEstudiate');
   info['nombre'].value = estudiante.nombre;
   info['programa'].value = estudiante.programa;
   info['materia'].value= estudiante.materia.nombre;


};
function aprobado(promedio){
    if(promedio >= 3.0){
        document.getElementById('promedio').style.backgroundColor = 'green';
    }else{
        document.getElementById('promedio').style.backgroundColor = 'red';
    }
};




