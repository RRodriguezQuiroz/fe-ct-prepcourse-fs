
function viajar (destino){
    if (destino === 'brasil'){
        console.log ("Gire a la Izquierda")
    }
    else if (destino === 'argentina'){
        console.log ('Gire a la Derecha')
    }
    else {
        console.log ('NOS PERDIMOS HP')
    }

}

viajar ('brasil')
viajar ('argentina')
viajar ('colombia')


function puede_manejar (edad){
    if (edad >= 18){
        console.log (true)
    }
    else {
        console.log (false)
    }
}

puede_manejar (15)
puede_manejar (20)