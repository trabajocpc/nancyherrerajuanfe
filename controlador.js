let nombresUsuario=document.getElementById("nombre")
let correoUssuario=document.getElementById("correo")
let telefonoUsuario=document.getElementById("telefono")
let botonUsuario=document.getElementById("botonFormulario")
//vamos a escuchar el clic en el boton
botonUsuario.addEventListener("click",function(evento){
    evento.preventDefault()
    let nombre=nombresUsuario.value
    let correo=correoUssuario.value
    let telefono=telefonoUsuario.value
    let errores=[]
    if(!nombre){
        errores.push("error en el nombre")
        nombresUsuario.classList.add("is-invalid")
    }
    if(!correo){
        errores.push("error en el correo")
        correoUssuario.classList.add("is-invalid")
    }
    if(!telefono){
        errores.push("error en el telefono")
        telefonoUsuario.classList.add("is-invalid")

    }
    if(errores.length>0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
 
       
    }else{  
         Swal.fire(
        'Exito en la reserva',
        'You clicked the button!',
        'success'
      )
      //Preguntando si tengo datos en menoria
      let datosMemoria=JSON.parse(localStorage.getItem("datosMemoria"))
      let reservas
      if(datosMemoria==null){
         reservas=[]
      }
      else{
        reservas=datosMemoria
      }

      
      let reserva={
        nombre,
        correo,
        telefono,
      }
      reservas.push(reserva)
      localStorage.setItem("datosMemoria",JSON.stringify(reservas))

    }
 
})