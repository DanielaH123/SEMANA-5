const datos = {
    nombreCompleto: "Daniela Alexandra Herrera Torres",
    formacion: "Tecnología en Desarrollo de Software",
    descripcionFormacion: "Soy estudiante de la carrera de Tecnología en Desarrollo de Software, esta se enfoca en el aprendizaje de lenguajes de programación, diseño de sistemas informáticos, desarrollo de aplicaciones web y móviles, así como el análisis y resolución de problemas técnicos en el ámbito de las tecnologías de la información.",
    edad: 22,
    correo: "daherrerato@pucesi.edu.ec",
    hobbies: ["Ver series y películas de misterio", "Jugar fútbol", "Salir de viaje", "Leer artículos de ciencia"],
    fotoHobby: "/foto.jpg"
};

document.getElementById("nombre-completo").textContent = datos.nombreCompleto;
document.getElementById("formacion").textContent = datos.descripcionFormacion;
document.getElementById("datos-nombre").textContent = datos.nombreCompleto;
document.getElementById("edad").textContent = datos.edad;
document.getElementById("correo").textContent = datos.correo;

const hobbiesList = document.getElementById("hobbies");
datos.hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
});

document.getElementById("foto-hobby").src = datos.fotoHobby;

function calcular() {
    const fechaInput = document.getElementById("fecha").value;
    const cedula = document.getElementById("cedula").value;
    const resultadoDiferencia = document.getElementById("diferencia");
    const resultadoCedula = document.getElementById("validacion-cedula");

    if (!fechaInput || !cedula) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const fechaNacimiento = new Date(fechaInput);
    const fechaActual = new Date();
    let años = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let meses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    let días = fechaActual.getDate() - fechaNacimiento.getDate();

    if (días < 0) {
        meses--;
        días += new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
    }
    if (meses < 0) {
        años--;
        meses += 12;
    }

    resultadoDiferencia.value = `${años} años, ${meses} meses, ${días} días`;

    const validarCedula = (cedula) => {
        if (cedula.length !== 10) return false;
        const digitoRegion = parseInt(cedula.substring(0, 2));
        if (digitoRegion < 1 || digitoRegion > 24) return false;

        let suma = 0;
        const ultimoDigito = parseInt(cedula[9]);
        for (let i = 0; i < 9; i++) {
            let num = parseInt(cedula[i]);
            if (i % 2 === 0) {
                num *= 2;
                if (num > 9) num -= 9;
            }
            suma += num;
        }
        const digitoVerificador = 10 - (suma % 10 === 0 ? 10 : suma % 10);
        return digitoVerificador === ultimoDigito;
    };

    resultadoCedula.value = validarCedula(cedula)
        ? "Cédula ecuatoriana válida"
        : "Cédula no válida o extranjera";
}
