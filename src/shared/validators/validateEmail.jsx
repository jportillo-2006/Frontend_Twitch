export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.text(email);
}

export const emailValidateMessage = 'Por favor ingresa una direccion de correo electronico valida';