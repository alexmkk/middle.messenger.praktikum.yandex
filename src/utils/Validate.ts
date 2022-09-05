export enum ValidationFields {
    Email = 'email',
    Name = 'name',
    Login = 'login',
    Password = 'password',
    Phone = 'phone',
    Message = 'message',
}

export const validate = (value: string, type: ValidationFields) => {
    const validationTypes = {
        email: /\S+@\S+\.\S+/,
        name: /[A-ZА-Я][a-zа-я\-]*/,
        login:  /(?!^\d+$)[A-Za-z0-9_\-]{3,20}/,
        password: /[A-Za-z0-9]{8,40}/,
        phone: /\+?[0-9]{10,15}/,
        message: /^[\s\S]{1,10}/,
    };

    return validationTypes[type].test(value);
}
