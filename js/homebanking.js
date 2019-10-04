//Declaración de variables
var nombreUsuario = "Diego Marengo";
var saldoCuenta = 500000;
var limiteExtraccion = 15000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function sumaDineroACuenta(cantidadASumar){
    saldoCuenta += cantidadASumar;
}

function quitarDineroDeCuenta(cantidadAQuitar){
    saldoCuenta -= cantidadAQuitar;
}

/* Funcion para cambiar el limite de extraccion de dinero. Se solicita el nuevo limite y luego se muestra en pantalla */
function cambiarLimiteDeExtraccion(nuevoLimiteExtraccion) {
    nuevoLimiteExtraccion = prompt("Ingrese nuevo el nuevo limite de extraccion");
    if (nuevoLimiteExtraccion > 0){
        limiteExtraccion = nuevoLimiteExtraccion;
        actualizarLimiteEnPantalla();
        alert("El nuevo limite de extraccion es: $" + limiteExtraccion);
    }else{
        alert("El valor ingresado es incorrecto");
    }
}
/* Funcion para Extraer dinero a la cuenta. Solicita el dinero a extraer luego presenta los valores que extraimos los valores anteriores y posteriores de la cuenta. Chequea que se extraigan montos multiplos de 100 y que no supere el limite de lo que tenemos en el saldo. */
function extraerDinero(extraccion) {
    var SaldoInicial = saldoCuenta;
    extraccion = prompt("Ingrese la cantidad de dinero a extraer");
    if (extraccion > 0){
        if(extraccion <= saldoCuenta){
            if (extraccion <= limiteExtraccion){
                if (extraccion % 100 == 0) {
                    saldoCuenta = saldoCuenta - parseInt(extraccion);
                    actualizarSaldoEnPantalla();
                    alert("Ha retirado $" + extraccion + "\nSaldo anterior $" + SaldoInicial + "\nSaldo Actual $" + saldoCuenta);
                }else{
                    alert("El cajero solo posee billetes de $100, por favor ingresar multiplos de $100 para realizar la extraccion");
                    }
            } else {
                alert("El limite de extraccion de dinero ingresado, es superior al autorizado");
            }
        }else{
            alert("Ha solicitado extraer mas dinero del saldo que posee en su cuenta");
        }
   }else{
        alert("Debe ingresar un valor en pesos positivo para realizar la extracion");
   }
}

/* Funcion para Agregar dinero a la cuenta. Solicita el ingreso de dinero luego presenta los valores ingresados
   los valores anteriores y posteriores de la cuenta. Chequea que no sea un valor negativo. */
function depositarDinero(deposito) {
    var saldoAnterior = saldoCuenta;
    deposito = prompt("Ingrese la cantidad de dinero a depositar");
    if (deposito > 0){
        saldoCuenta = saldoCuenta + parseInt(deposito);
        actualizarSaldoEnPantalla();
        alert("Ha depositado $" + deposito + "\nSaldo anterior $" + saldoAnterior + "\nNuevo saldo $" + saldoCuenta);
    } else {
        alert("Ud. no ha ingresado un valor correcto para realizar el deposito, intentelo nuevamente");
    }
}

/* En esta fucnion se realiza el pago de servicios  */
function pagarServicio() {
    var agua = 350;
    var telefono = 425;
    var luz = 210;
    var internet = 570;
    var servicio;
    ingresarDato();

    function ingresarDato(){
        servicio = prompt("Ingrese el numero que corresponda al servicio que desesa pagar" +
        "\n1 - Agua" + 
        "\n2 - Telefono" + 
        "\n3 - Luz" +
        "\n4 - Internet");
    }
    switch (servicio) {
        case "1":
            if (agua <= saldoCuenta){
                var saldoPrevio = saldoCuenta;
                saldoCuenta = saldoCuenta - agua;
                actualizarSaldoEnPantalla();
                alert("Has pagado el serivcio de Agua." + "\nSaldo Anterior $" + saldoPrevio + "\nDinero descontado $" + agua + "\nSaldo actual $" + saldoCuenta);
            }else{
                alert("No hay suficiente saldo en la cuenta para pagar este servicio");
            }
        break;
        case "2":
            if (telefono <= saldoCuenta){
                var saldoPrevio = saldoCuenta;
                saldoCuenta = saldoCuenta - telefono;
                actualizarSaldoEnPantalla();
                alert("Has pagado el serivcio de Telefono." + "\nSaldo Anterior $" + saldoPrevio + "\nDinero descontado $" + telefono + "\nSaldo actual $" + saldoCuenta);
            }else{
                alert("No hay suficiente saldo en la cuenta para pagar este servicio");
            }
        break;
        case "3":
            if (luz <= saldoCuenta){
                var saldoPrevio = saldoCuenta;
                saldoCuenta = saldoCuenta - luz;
                actualizarSaldoEnPantalla();
                alert("Has pagado el serivcio de Luz." + "\nSaldo Anterior $" + saldoPrevio + "\nDinero descontado $" + luz + "\nSaldo actual $" + saldoCuenta);
            }else{
                alert("No hay suficiente saldo en la cuenta para pagar este servicio");
            }
        break;
        case "4":
            if (internet <= saldoCuenta){
                var saldoPrevio = saldoCuenta;
                saldoCuenta = saldoCuenta - internet;
                actualizarSaldoEnPantalla();
                alert("Has pagado el serivcio de Internet." + "\nSaldo Anterior $" + saldoPrevio + "\nDinero descontado $" + internet + "\nSaldo actual $" + saldoCuenta);
            }else{
                alert("No hay suficiente saldo en la cuenta para pagar este servicio");
            }
        break;
        default:
            alert("No existe el servicio que se ha seleccionado");
        break;
    }
}

/* Esta funcion transfiere dinero a dos cuentas habilitadas, chequeando la disponibilidad en el saldo */
function transferirDinero(transferir) {
    var cuentaAmigoUno = 1234567;
    var cuentaAmigoDos = 7654321;
    transferir = prompt("Ingrese la cantidad de dinero a transferir");
    if (transferir > 0){
        if (transferir <= saldoCuenta){
            cuentaAmigo = prompt("Ingrese cuenta a transferir");
            if (cuentaAmigo == cuentaAmigoDos || cuentaAmigo == cuentaAmigoUno){
                saldoCuenta = saldoCuenta - transferir;
                actualizarSaldoEnPantalla();
                alert("Se han transferido $" + transferir + "\nCuenta destino " + cuentaAmigo);
            } else{
                alert("Solo se puede transferirse dinero a una cuenta amiga");
            }
        }else{
            alert("No hay suficiente dinero en la cuenta para realizar esa transferencia");
        }
    }else{
        alert("El monto ingresado para realizar la transferencia es incorrecto, intente nuevamente.");
    }
}

/* En esta funcion se realiza el inicio de secion para realizar la transferencia */
function iniciarSesion(codigoinicio) {
    var codigo = 1234;
    codigoinicio = prompt("Ingrese el codigo de su cuenta para iniciar la sesion");
    if (codigoinicio == codigo){
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones");
    } else{
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
        alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
    }
}

/* Esta es una funcion para realizar un deposito de un cheque */
function depositoCheque(cheque){
    var saldoAnterior = saldoCuenta;
    cheque = prompt("Ingrese el valor del cheque a depositar en la cuenta");
    if (cheque > 0){
        saldoCuenta = saldoCuenta + parseInt(cheque);
        actualizarSaldoEnPantalla();
        alert("Ha depositado en la cuenta un cheque de $" + cheque + "\nSaldo anterior $" + saldoAnterior + "\nNuevo saldo $" + saldoCuenta);
    } else {
        alert("Ud. no ha ingresado un valor correcto para realizar el deposito de cheque, intentelo nuevamente");
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}