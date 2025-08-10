// Modal popup for first visit
(function() {
  if (localStorage.getItem('modalDismissed')) return;
  var modal = document.createElement('div');
  modal.id = 'custom-modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <h2>Welcome!</h2>
      <form id="modal-form">
        <label>Name:<br><input type="text" name="name" required></label><br>
        <label>Email:<br><input type="email" name="email" required></label><br>
        <button type="submit">Submit</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-form').onsubmit = function(e) {
    e.preventDefault();
    fetch('https://formspree.io/f/your-placeholder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.name.value,
        email: this.email.value
      })
    });
    localStorage.setItem('modalDismissed', 'true');
    document.body.removeChild(modal);
    document.body.style.overflow = '';
  };
  document.querySelector('.modal-overlay').onclick = function() {
    localStorage.setItem('modalDismissed', 'true');
    document.body.removeChild(modal);
    document.body.style.overflow = '';
  };
})();

// Plausible Analytics
(function() {
  var script = document.createElement('script');
  script.defer = true;
  script.setAttribute('data-domain', 'example.com');
  script.src = 'https://plausible.io/js/plausible.js';
  document.head.appendChild(script);
})();
