// Function to close the offCanvasNavbar when a link is clicked
function closeOffcanvasNavbar() {
  let offcanvasNavbar = document.getElementById("offcanvasNavbar2");
  let offcanvasNavbarInstance =
    bootstrap.Offcanvas.getInstance(offcanvasNavbar);
  if (offcanvasNavbarInstance) {
    offcanvasNavbarInstance.hide();
  }
}
