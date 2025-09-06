const btnProjetos = document.getElementById("btn-projetos");

btnProjetos.addEventListener("click", () => {
  // Selecione a seção de projetos
  const projetos = document.getElementById("projetos");

  projetos.scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".slide").forEach((slide) => {
  slide.addEventListener("click", () => {
    slide.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  });
});
