function showAlert() {
  alert("Terima kasih sudah bergabung! 🎉");
}
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Dummy login check
      if (username === "gamer" && password === "1234") {
        loginMessage.style.color = "lightgreen";
        loginMessage.textContent = "Login berhasil! 🔓";
        setTimeout(() => {
          window.location.href = "index.html"; // redirect ke halaman utama
        }, 1000);
      } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Username atau password salah!";
      }
    });
  }
});
