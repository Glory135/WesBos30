const inputs = document.querySelectorAll("input");

const handleUpdate = (e) => {
  const suffix = e.target.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value + suffix
  );
};

inputs.forEach((i) => {
  i.addEventListener("change", (e) => handleUpdate(e));
});
inputs.forEach((i) => {
  i.addEventListener("mouseover", (e) => handleUpdate(e));
});
