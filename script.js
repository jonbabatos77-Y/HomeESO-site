const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
});


const spaceButtons = document.querySelectorAll(".option-buttons button");

spaceButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});


const estimateForm = document.getElementById("estimateForm");
const estimateResult = document.getElementById("estimateResult");

estimateForm.addEventListener("submit", event => {
  event.preventDefault();

  const size = document.getElementById("sizeSelect").value;

  const selectedSpaces = [
    ...document.querySelectorAll(".option-buttons button.active")
  ].map(button => button.dataset.space);

  if (!size) {
    estimateResult.textContent = "평형을 먼저 선택해주세요.";
    return;
  }

  if (selectedSpaces.length === 0) {
    estimateResult.textContent = "시공 공간을 하나 이상 선택해주세요.";
    return;
  }

  estimateResult.textContent =
    `${size}평대 / ${selectedSpaces.join(", ")} 기준으로 상담 정보를 준비했습니다. 정확한 금액은 현장 확인 후 안내됩니다.`;
});