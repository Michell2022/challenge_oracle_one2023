function messageAlerta(){
    Swal.fire({
        position: 'top-center',
        icon: 'warning',
        title: 'No se aceptan Mayúsculas, Tildes o Signos de Puntuación',
        showConfirmButton: false,
        timer: 2500
      })
}

const encrypt = (text) => {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
};

const decrypt = (text) => {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
};

const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

const inputText = document.getElementById('input-text');
const outputText = document.getElementById('resultado');
const encryptBtn = document.getElementById('btn_encriptado');
const decryptBtn = document.getElementById('btn_desencriptado');
const copyBtn = document.getElementById('btn_copiar');

// BOTON PARA ENCRIPTAR TEXTO
encryptBtn.addEventListener('click', () => {
    const input = inputText.value;

    // Validar que el texto no contenga caracteres no admitidos
    const pattern = /[A-Z]|[\u00C0-\u00FF]|[\p{P}\p{S}]/gu;
    if (pattern.test(input)) {
        messageAlerta();
        return;
    }
    const output = encrypt(input);
    outputText.textContent = output;
});

// BOTON PARA DESENCRIPTAR TEXTO
decryptBtn.addEventListener('click', () => {
    const input = inputText.value;
    // Validar que el texto no contenga caracteres no admitidos
    const pattern = /[A-Z]|[\u00C0-\u00FF]|[\p{P}\p{S}]/gu;
    if (pattern.test(input)) {
        messageAlerta();
        return;
    }
    const output = decrypt(input);
    outputText.textContent = output;
});

//BOTON PARA COPIAR EL RESULTADO
copyBtn.addEventListener('click', () => {
    const text = outputText.textContent;
    copyToClipboard(text);
});