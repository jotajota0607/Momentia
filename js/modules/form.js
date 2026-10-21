/**
 * form.js - Módulo de Formulario Interactivo de Consulta para Proveedores
 * Procesa los datos del proveedor, valida en cliente y genera un enlace nativo
 * en nueva pestaña (target="_blank") con respaldo para Gmail Web y copia al portapapeles.
 */

export function initSupplierForm() {
    const form = document.getElementById('supplier-form');
    const submitBtn = document.getElementById('supplier-submit-btn');
    const feedbackBox = document.getElementById('form-feedback');
    if (!form || !submitBtn) return;

    // Correo corporativo oficial de Momentia & Co, LLC para recepción de alianzas:
    const targetEmail = 'business@momentiaco.com';

    // Evitar recarga si se dispara submit nativo
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitBtn.click();
    });

    // Permitir enviar con Enter en campos de texto
    form.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        submitBtn.click();
      }
    });

    function getFormData() {
      return {
        nameInput: form.querySelector('#supplier-name'),
        emailInput: form.querySelector('#supplier-email'),
        phoneInput: form.querySelector('#supplier-phone'),
        companyInput: form.querySelector('#supplier-company'),
        websiteInput: form.querySelector('#supplier-website'),
        categorySelect: form.querySelector('#supplier-category'),
        roleSelect: form.querySelector('#supplier-role'),
        messageTextarea: form.querySelector('#supplier-message'),
        name: form.querySelector('#supplier-name')?.value.trim() || '',
        email: form.querySelector('#supplier-email')?.value.trim() || '',
        phone: form.querySelector('#supplier-phone')?.value.trim() || '',
        company: form.querySelector('#supplier-company')?.value.trim() || '',
        website: form.querySelector('#supplier-website')?.value.trim() || '',
        category: form.querySelector('#supplier-category')?.value || '',
        role: form.querySelector('#supplier-role')?.value || '',
        message: form.querySelector('#supplier-message')?.value.trim() || ''
      };
    }

    function buildUrls(data) {
      const subject = `Supplier Partnership Inquiry: ${data.company} (${data.category})`;
      const bodyLines = [
        'MOMENTIA & CO, LLC - SUPPLIER PARTNERSHIP INQUIRY',
        '===========================================',
        '',
        'CONTACT INFORMATION:',
        `• Full Name: ${data.name}`,
        `• Work Email: ${data.email}`,
        `• Phone Number: ${data.phone || 'Not specified'}`,
        '',
        'COMPANY & BRAND DETAILS:',
        `• Company / Brand Name: ${data.company}`,
        `• Website / Storefront: ${data.website || 'Not specified'}`,
        `• Product Category: ${data.category}`,
        `• Business Role: ${data.role}`,
        '',
        'PARTNERSHIP OVERVIEW / MESSAGE:',
        data.message,
        '',
        '===========================================',
        'Sent via Momentia & Co, LLC Supplier Portal'
      ];

      const emailBody = bodyLines.join('\n');
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

      return { emailBody, mailtoUrl, gmailUrl };
    }

    function prepareLink() {
      const data = getFormData();
      if (data.name && data.email && isValidEmail(data.email) && data.company && data.category && data.role && data.message) {
        const { mailtoUrl } = buildUrls(data);
        submitBtn.href = mailtoUrl;
      }
    }

    submitBtn.addEventListener('pointerdown', prepareLink);
    submitBtn.addEventListener('focus', prepareLink);

    submitBtn.addEventListener('click', (e) => {
      const data = getFormData();
      clearErrors(form);

      let hasError = false;

      if (!data.name) {
        showError(data.nameInput, 'Please enter your full name.');
        hasError = true;
      }

      if (!data.email || !isValidEmail(data.email)) {
        showError(data.emailInput, 'Please enter a valid business email.');
        hasError = true;
      }

      if (!data.company) {
        showError(data.companyInput, 'Please enter your company or brand name.');
        hasError = true;
      }

      if (!data.category) {
        showError(data.categorySelect, 'Please select a product category.');
        hasError = true;
      }

      if (!data.role) {
        showError(data.roleSelect, 'Please select your business role.');
        hasError = true;
      }

      if (!data.message) {
        showError(data.messageTextarea, 'Please provide a brief overview of your products or inquiry.');
        hasError = true;
      }

      if (hasError) {
        e.preventDefault();
        submitBtn.href = '#';
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const { emailBody, mailtoUrl, gmailUrl } = buildUrls(data);
      submitBtn.href = mailtoUrl;

      // Permitir la navegación nativa del enlace <a target="_blank">
      // para abrir el correo en nueva pestaña sin salir de Momentia

      if (feedbackBox) {
        feedbackBox.innerHTML = `
          <div class="feedback-content">
            <div class="feedback-icon" aria-hidden="true">&#10003;</div>
            <h4>Inquiry Formatted Successfully</h4>
            <p>Your inquiry is opening in a new tab with all details pre-filled. Review and click <strong>Send</strong>.</p>
            
            <div class="feedback-actions">
              <a href="${mailtoUrl}" class="btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Open in Email Client &rarr;</a>
              <a href="${gmailUrl}" class="btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">Open via Gmail Web &rarr;</a>
              <button type="button" id="copy-inquiry-btn" class="btn-ghost btn-sm">Copy Inquiry Details</button>
            </div>

            <p class="feedback-note">If your email client did not open automatically, click <strong>Open via Gmail Web</strong> or copy the details directly to <a href="mailto:${targetEmail}"><strong>${targetEmail}</strong></a>.</p>
            <button type="button" id="reset-form-btn" class="btn-link">Edit or send another inquiry</button>
          </div>
        `;
        feedbackBox.classList.remove('hidden');
        feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        const copyBtn = feedbackBox.querySelector('#copy-inquiry-btn');
        if (copyBtn) {
          copyBtn.addEventListener('click', async () => {
            try {
              await navigator.clipboard.writeText(emailBody);
              copyBtn.textContent = '✓ Copied to Clipboard!';
              copyBtn.classList.add('copied');
              setTimeout(() => {
                copyBtn.textContent = 'Copy Inquiry Details';
                copyBtn.classList.remove('copied');
              }, 3000);
            } catch (err) {
              prompt('Copy the inquiry text below:', emailBody);
            }
          });
        }

        const resetBtn = feedbackBox.querySelector('#reset-form-btn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            feedbackBox.classList.add('hidden');
            feedbackBox.innerHTML = '';
            submitBtn.href = '#';
          });
        }
      }
    });

    function isValidEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
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
