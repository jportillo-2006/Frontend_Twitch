export const validatorAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.text(url);
} 

export const avatarUrlValidationMessage = 'Esta no es una URL valida';