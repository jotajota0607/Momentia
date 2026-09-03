/**
 * form.js - Módulo de Formulario Interactivo de Consulta para Proveedores
 * Procesa los datos del proveedor, valida en cliente y genera un correo
 * estructurado mediante mailto: con opción de copia al portapapeles.
 */

export function initSupplierForm() {
  const form = document.getElementById('supplier-form');
  const feedbackBox = document.getElementById('form-feedback');
  if (!form) return;

  // Correo corporativo oficial de Momentia LLC para recepción de alianzas:
  const targetEmail = 'partnerships@momentiallc.com';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener valores de los campos
    const name = form.querySelector('#supplier-name')?.value.trim();
    const email = form.querySelector('#supplier-email')?.value.trim();
    const phone = form.querySelector('#supplier-phone')?.value.trim();
    const company = form.querySelector('#supplier-company')?.value.trim();
    const website = form.querySelector('#supplier-website')?.value.trim();
    const category = form.querySelector('#supplier-category')?.value;
    const role = form.querySelector('#supplier-role')?.value;
    const message = form.querySelector('#supplier-message')?.value.trim();

    // Limpiar errores previos
    clearErrors(form);

    // Validar campos obligatorios
    let hasError = false;

    if (!name) {
      showError(form.querySelector('#supplier-name'), 'Please enter your full name.');
      hasError = true;
    }

    if (!email || !isValidEmail(email)) {
      showError(form.querySelector('#supplier-email'), 'Please enter a valid business email.');
      hasError = true;
    }

    if (!company) {
      showError(form.querySelector('#supplier-company'), 'Please enter your company or brand name.');
      hasError = true;
    }

    if (!category) {
      showError(form.querySelector('#supplier-category'), 'Please select a product category.');
      hasError = true;
    }

    if (!role) {
      showError(form.querySelector('#supplier-role'), 'Please select your business role.');
      hasError = true;
    }

    if (!message) {
      showError(form.querySelector('#supplier-message'), 'Please provide a brief overview of your products or inquiry.');
      hasError = true;
    }

    if (hasError) {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Construir asunto y cuerpo estructurado profesional
    const subject = `Supplier Partnership Inquiry: ${company} (${category})`;
    
    const bodyLines = [
      'MOMENTIA LLC - SUPPLIER PARTNERSHIP INQUIRY',
      '===========================================',
      '',
      'CONTACT INFORMATION:',
      `• Full Name: ${name}`,
      `• Work Email: ${email}`,
      `• Phone Number: ${phone || 'Not specified'}`,
      '',
      'COMPANY & BRAND DETAILS:',
      `• Company / Brand Name: ${company}`,
      `• Website / Storefront: ${website || 'Not specified'}`,
      `• Product Category: ${category}`,
      `• Business Role: ${role}`,
      '',
      'PARTNERSHIP OVERVIEW / MESSAGE:',
      message,
      '',
      '===========================================',
      'Sent via Momentia LLC Supplier Portal'
    ];

    const emailBody = bodyLines.join('\n');
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Disparar el cliente de correo
    window.location.href = mailtoUrl;

    // Mostrar panel de confirmación y respaldo en pantalla
    if (feedbackBox) {
      feedbackBox.innerHTML = `
        <div class="feedback-content">
          <div class="feedback-icon" aria-hidden="true">&#10003;</div>
          <h4>Inquiry Formatted Successfully</h4>
          <p>Your default email application should open shortly with all details pre-filled. Simply review and click <strong>Send</strong>.</p>
          
          <div class="feedback-actions">
            <a href="${mailtoUrl}" class="btn-primary btn-sm">Open Email Again &rarr;</a>
            <button type="button" id="copy-inquiry-btn" class="btn-ghost btn-sm">Copy Inquiry Details</button>
          </div>

          <p class="feedback-note">If your email client did not open automatically, you can copy the text above and send it directly to <a href="mailto:${targetEmail}"><strong>${targetEmail}</strong></a>.</p>
          <button type="button" id="reset-form-btn" class="btn-link">Edit or send another inquiry</button>
        </div>
      `;
      feedbackBox.classList.remove('hidden');
      feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Botón para copiar al portapapeles
      const copyBtn = feedbackBox.querySelector('#copy-inquiry-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(emailBody);
            copyBtn.textContent = 'Copied to Clipboard!';
            copyBtn.style.borderColor = 'var(--orange)';
            setTimeout(() => {
              copyBtn.textContent = 'Copy Inquiry Details';
              copyBtn.style.borderColor = '';
            }, 3000);
          } catch (err) {
            // Fallback si el portapapeles falla
            prompt('Copy the inquiry text below:', emailBody);
          }
        });
      }

      // Botón para volver a editar
      const resetBtn = feedbackBox.querySelector('#reset-form-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          feedbackBox.classList.add('hidden');
          feedbackBox.innerHTML = '';
        });
      }
    }
  });

  // Funciones auxiliares de validación
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(input, errorText) {
    if (!input) return;
    input.classList.add('is-invalid');
    input.setAttribute('aria-invalid', 'true');

    const errorEl = document.createElement('span');
    errorEl.className = 'field-error';
    errorEl.textContent = errorText;
    input.parentNode.appendChild(errorEl);
  }

  function clearErrors(formEl) {
    formEl.querySelectorAll('.is-invalid').forEach(el => {
      el.classList.remove('is-invalid');
      el.removeAttribute('aria-invalid');
    });
    formEl.querySelectorAll('.field-error').forEach(el => el.remove());
  }
}
