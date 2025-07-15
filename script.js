const materias = {
  "Ciclo 1": [
    { nombre: "Filosofía General", uv: 3, requisitos: "-", estado: "pendiente" },
    { nombre: "Inglés I", uv: 2, requisitos: "-", estado: "pendiente" },
    { nombre: "Introducción a la Economía I", uv: 4, requisitos: "-", estado: "pendiente" },
    { nombre: "Matemática I", uv: 5, requisitos: "-", estado: "pendiente" },
    { nombre: "Teoría Administrativa I", uv: 3, requisitos: "-", estado: "pendiente" }
  ],
  "Ciclo 2": [
    { nombre: "Inglés II", uv: 2, requisitos: "Inglés I", estado: "pendiente" },
    { nombre: "Introducción a la Economía II", uv: 4, requisitos: "Intro a la Economía I", estado: "pendiente" },
    { nombre: "Matemática II", uv: 5, requisitos: "Matemática I", estado: "pendiente" },
    { nombre: "Sociología General", uv: 3, requisitos: "Filosofía General", estado: "pendiente" },
    { nombre: "Teoría Administrativa II", uv: 3, requisitos: "Teoría Administrativa I", estado: "pendiente" }
  ],
  "Ciclo 3": [
    { nombre: "Computación I", uv: 2, requisitos: "-", estado: "pendiente" },
    { nombre: "Contabilidad Financiera I", uv: 4, requisitos: "Teoría Administrativa II", estado: "pendiente" },
    { nombre: "Matemática III", uv: 5, requisitos: "Matemática II", estado: "pendiente" },
    { nombre: "Microeconomía I", uv: 4, requisitos: "Intro Economía II, Matemática II", estado: "pendiente" },
    { nombre: "Técnicas de Investigación", uv: 3, requisitos: "Intro Economía II, Sociología", estado: "pendiente" }
  ],
  "Ciclo 4": [
    { nombre: "Computación II", uv: 2, requisitos: "Computación I, Inglés I", estado: "pendiente" },
    { nombre: "Contabilidad Financiera II", uv: 4, requisitos: "Contabilidad Financiera I", estado: "pendiente" },
    { nombre: "Derecho Mercantil I", uv: 3, requisitos: "Contabilidad Financiera I", estado: "pendiente" },
    { nombre: "Macroeconomía I", uv: 4, requisitos: "Microeconomía I, Técnicas de Investigación", estado: "pendiente" },
    { nombre: "Matemática Financiera", uv: 5, requisitos: "Matemática III", estado: "pendiente" }
  ],
  "Ciclo 5": [
    { nombre: "Contabilidad de Costos I", uv: 4, requisitos: "Contabilidad Financiera II", estado: "pendiente" },
    { nombre: "Derecho Mercantil II", uv: 3, requisitos: "Derecho Mercantil I", estado: "pendiente" },
    { nombre: "Estadística I", uv: 5, requisitos: "Matemática Financiera", estado: "pendiente" },
    { nombre: "Psicología Organizacional", uv: 4, requisitos: "Derecho Mercantil I, Técnicas de Investigación", estado: "pendiente" }
  ],
  "Ciclo 6": [
    { nombre: "Contabilidad de Costos II", uv: 4, requisitos: "Contabilidad de Costos I", estado: "pendiente" },
    { nombre: "Derecho Laboral", uv: 3, requisitos: "Derecho Mercantil II", estado: "pendiente" },
    { nombre: "Estadística II", uv: 5, requisitos: "Estadística I", estado: "pendiente" },
    { nombre: "Sistemas Organizacionales", uv: 3, requisitos: "Estadística I, Psicología Organizacional", estado: "pendiente" }
  ],
  "Ciclo 7": [
    { nombre: "Administración de Personal I", uv: 4, requisitos: "Derecho Laboral, Sistemas Organizacionales", estado: "pendiente" },
    { nombre: "Administración Superior", uv: 3, requisitos: "Sistemas Organizacionales", estado: "pendiente" },
    { nombre: "Costeo Variable", uv: 4, requisitos: "Contabilidad de Costos II, Estadística II", estado: "pendiente" },
    { nombre: "Mercadotecnia I", uv: 4, requisitos: "Estadística II, Macroeconomía I", estado: "pendiente" }
  ],
  "Ciclo 8": [
    { nombre: "Administración de la Producción I", uv: 4, requisitos: "Costeo Variable, Mercadotecnia I", estado: "pendiente" },
    { nombre: "Administración de Personal II", uv: 4, requisitos: "Administración de Personal I", estado: "pendiente" },
    { nombre: "Ética y Desarrollo Profesional", uv: 3, requisitos: "Administración de Personal I", estado: "pendiente" },
    { nombre: "Mercadeo Internacional (Electiva)", uv: 4, requisitos: "Mercadotecnia II", estado: "pendiente" },
    { nombre: "Mercadotecnia II", uv: 4, requisitos: "Mercadotecnia I", estado: "pendiente" }
  ],
  "Ciclo 9": [
    { nombre: "Administración de la Producción II (Electiva)", uv: 4, requisitos: "Administración de la Producción I", estado: "pendiente" },
    { nombre: "Administración Financiera I", uv: 4, requisitos: "Costeo Variable", estado: "pendiente" },
    { nombre: "Administración Pública", uv: 4, requisitos: "Administración de Personal II", estado: "pendiente" },
    { nombre: "Sistemas Computacionales", uv: 4, requisitos: "Administración Superior", estado: "pendiente" }
  ],
  "Ciclo 10": [
    { nombre: "Administración de Personal III (Electiva)", uv: 4, requisitos: "Administración de Personal II", estado: "pendiente" },
    { nombre: "Administración Financiera II", uv: 4, requisitos: "Administración Financiera I", estado: "pendiente" },
    { nombre: "Formulación y Evaluación de Proyectos", uv: 5, requisitos: "Admin. Financiera I, Producción I", estado: "pendiente" },
    { nombre: "Seminario de Finanzas (Electiva)", uv: 4, requisitos: "Administración Financiera I", estado: "pendiente" },
    { nombre: "Técnicas Presupuestarias", uv: 5, requisitos: "Administración Financiera I", estado: "pendiente" }
  ]
};

const contenedor = document.getElementById("malla-container");

for (let ciclo in materias) {
  const divCiclo = document.createElement("div");
  divCiclo.className = "ciclo";

  const titulo = document.createElement("h2");
  titulo.textContent = ciclo;
  divCiclo.appendChild(titulo);

  materias[ciclo].forEach(m => {
    const divMateria = document.createElement("div");
    divMateria.className = `materia estado-${m.estado}`;
    divMateria.textContent = m.nombre;
    divMateria.onclick = () => mostrarInfo(m);
    divCiclo.appendChild(divMateria);
  });

  contenedor.appendChild(divCiclo);
}

function mostrarInfo(materia) {
  document.getElementById("materia-nombre").textContent = materia.nombre;
  document.getElementById("uv").textContent = materia.uv;
  document.getElementById("requisitos").textContent = materia.requisitos;
  document.getElementById("info-box").classList.remove("hidden");
}

function cerrarInfo() {
  document.getElementById("info-box").classList.add("hidden");
}
