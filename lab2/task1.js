function validateForm() {
    const pibRegex = /^[А-ЯҐЄІЇ]{1}[а-яґєії']+\s[А-ЯҐЄІЇ]\.\s[А-ЯҐЄІЇ]\.$/;
    const pibInput = document.getElementById('pib').value;
    const pibElement = document.getElementById('pib');
  
    const birthdateRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
    const birthdateInput = document.getElementById('birthdate').value;
    const birthdateElement = document.getElementById('birthdate');
  
    const addressRegex = /^м\.\s[А-ЯҐЄІЇ][а-яґєії']+/;
    const addressInput = document.getElementById('address').value;
    const addressElement = document.getElementById('address');
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailInput = document.getElementById('email').value;
    const emailElement = document.getElementById('email');
  
    const telegramRegex = /^@[A-Z][_A-Za-z0-9]+$/;
    const telegramInput = document.getElementById('telegram').value;
    const telegramElement = document.getElementById('telegram');
  
    pibElement.style.boxShadow = '';
    birthdateElement.style.boxShadow = '';
    addressElement.style.boxShadow = '';
    emailElement.style.boxShadow = '';
    telegramElement.style.boxShadow = '';

    //Перевірка та помилкові поля
    let hasError = false;
    if (!pibRegex.test(pibInput)) {
    pibElement.style.boxShadow = '0 0 5px red';
    hasError = true;
    }
    if (!birthdateRegex.test(birthdateInput)) {
    birthdateElement.style.boxShadow = '0 0 5px red';
    hasError = true;
    }
    if (!addressRegex.test(addressInput)) {
    addressElement.style.boxShadow = '0 0 5px red';
    hasError = true;
    }
    if (!emailRegex.test(emailInput)) {
    emailElement.style.boxShadow = '0 0 5px red';
    hasError = true;
    }
    if (!telegramRegex.test(telegramInput)) {
    telegramElement.style.boxShadow = '0 0 5px red';
    hasError = true;
    }
  
    //Відображення повідомлення
    if (hasError) {
        alert('Будь ласка, перевірте введену інформацію. Деякі поля містять помилки.');
    } else {
        const userInfo = `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #c04300;">Введена інформація:</h2>
            <p><strong>ПІБ:</strong> ${pibInput}</p>
            <p><strong>Дата народження:</strong> ${birthdateInput}</p>
            <p><strong>Адреса:</strong> ${addressInput}</p>
            <p><strong>E-mail:</strong> ${emailInput}</p>
            <p><strong>Telegram:</strong> ${telegramInput}</p>
          </div>
        `;
        const newWindow = window.open();
        newWindow.document.write(userInfo);
      }
  
    return !hasError;
  }
  