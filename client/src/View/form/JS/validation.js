const validation = (formData) => {
    const errors = {};
    if (formData.forename.trim() === "") {
      errors.forename = "Campo requerido";
    } else if (!/^[A-Za-z]+$/.test(formData.forename)) {
      errors.forename = "Debe contener solo letras";
    }
    if (formData.surname.trim() === "") {
      errors.surname = "Campo requerido";
    } else if (!/^[A-Za-z]+$/.test(formData.surname)) {
      errors.surname = "Debe contener solo letras";
    }

    if (formData.nationality.trim() === "") {
      errors.nationality = "Campo requerido";
    }

    if (formData.dob.trim() === "") {
      errors.dob = "Campo requerido";
    }

    if (formData.description.trim() === "") {
      errors.description = "Campo requerido";
    }

    if (formData.image.trim() === "") {
      errors.image = "Campo requerido";
    }
    if (formData.teams.length === 0) {
      errors.teams = "Seleccione al menos un equipo";
    }
    return errors;
  };

export default validation