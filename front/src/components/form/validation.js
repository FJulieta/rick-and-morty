export const validateUserData = (userData) => {
    const errors = {};
  
    // Email validation
    if (!userData.email) {
      errors.email = "Por favor complete este campo";
    } else if (userData.email.length > 35) {
      errors.email = "No puede superar los 35 caracteres";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)
    ) {
      errors.email = "Email inválido";
    }
  
    // Password validation
    if (!userData.password) {
      errors.password = "Por favor complete este campo";
    } else if (!/\d/.test(userData.password)) {
      errors.password = "La contraseña debe contener al menos un número";
    } else if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }
  
    return errors;
  };
  