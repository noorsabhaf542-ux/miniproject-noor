document.getElementById('printBtn')?.addEventListener('click', function(){
  window.print();
});

document.getElementById('themeToggle')?.addEventListener('click', function(){
  document.documentElement.classList.toggle('dark');
});

// Contact form handling: open user's mail client via mailto with prefilled subject/body
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'Contact from resume site';
    const message = document.getElementById('message').value.trim();
    const to = 'noor@example.com'; // change to your real email

    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // show status and attempt to open mail client
    const statusEl = document.getElementById('formStatus');
    statusEl.textContent = 'Opening your email client...';
    window.location.href = mailto;
    // After redirecting to mail client, keep a friendly confirmation
    setTimeout(()=>{ statusEl.textContent = 'If nothing opened, copy the message and send manually to ' + to; }, 2000);
  });
}
