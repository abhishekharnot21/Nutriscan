document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-toggle-password]").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.togglePassword);
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
      btn.textContent = input.type === "password" ? "Show" : "Hide";
    });
  });

  const login = document.getElementById("loginForm");
  if (login) login.addEventListener("submit", e => {
    e.preventDefault();
    window.location.href = "dashboard.html";
  });

  const register = document.getElementById("registerForm");
  if (register) register.addEventListener("submit", e => {
    e.preventDefault();
    alert("Account created in demo mode. Flask + MySQL authentication will be connected later.");
    window.location.href = "dashboard.html";
  });

  const file = document.getElementById("foodImage");
  const preview = document.getElementById("previewImage");
  const uploadContent = document.getElementById("uploadContent");
  const dropZone = document.getElementById("dropZone");

  if (file) {
    file.addEventListener("change", () => showPreview(file.files[0]));
    dropZone.addEventListener("dragover", e => { e.preventDefault(); dropZone.classList.add("dragging"); });
    dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragging"));
    dropZone.addEventListener("drop", e => {
      e.preventDefault();
      dropZone.classList.remove("dragging");
      const dropped = e.dataTransfer.files[0];
      if (dropped) { file.files = e.dataTransfer.files; showPreview(dropped); }
    });
  }

  function showPreview(selected) {
    if (!selected || !selected.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = e => {
      preview.src = e.target.result;
      preview.classList.remove("hidden");
      uploadContent.classList.add("hidden");
    };
    reader.readAsDataURL(selected);
  }

  const analyze = document.getElementById("analyzeBtn");
  if (analyze) analyze.addEventListener("click", () => {
    if (!file || !file.files.length) {
      showToast("Please choose a food image first.");
      return;
    }
    analyze.disabled = true;
    analyze.innerHTML = "Analyzing…";
    setTimeout(() => window.location.href = "scan-result.html", 700);
  });

  const profile = document.getElementById("profileForm");
  if (profile) profile.addEventListener("submit", e => {
    e.preventDefault();
    showToast("Profile saved in demo mode.");
  });
});

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return alert(message);
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function changeQty(amount) {
  const el = document.getElementById("qty");
  if (!el) return;
  let value = parseInt(el.textContent);
  value = Math.max(25, Math.min(1000, value + amount));
  el.textContent = value + " g";
}