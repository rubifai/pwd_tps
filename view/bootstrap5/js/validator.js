$(function () {
    $('#eje3').bootstrapValidator({

        message: 'oohh!! Este valor es totalmente invalido',


        feedbackIcons: {

            valid: 'far fa-check-circle has-success help-success',

            invalid: 'fa fa-times has-error help-block',

            validating: 'fa fa-circle yessss'

        },

        fields: { //campos o id

            nombre: {
                group: '.col-md-3',

                validators: {

                    notEmpty: {

                        message: 'El nombre de usuario es requerido <br>'

                    },

                    regexp: {
                        message: 'Debe contener solo letra <br>'
                    },
                    stringLength: {
                        min: 4,
                        message: 'Debe superar los 4 caracteres <br>'
                    }

                }

            },

            apellido: {
                group: '.col-md-3',

                validators: {

                    notEmpty: {

                        message: 'el apellido es obligatorio'

                    },
                    regexp: {
                        message: 'Debe contener solo letra <br>'
                    },
                    stringLength: {
                        min: 4,
                        message: 'Debe superar los 4 caracteres <br>'
                    }

                }

            },

            edad: {
                group: '.col-md-3',

                validators: {

                    notEmpty: {
                        message: 'La edad es obligatoria'
                    },
                    between: {
                        min: 5,
                        max: 90,
                        message: 'el valor debe estar entre 5 y 90 <br>'

                    }

                }

            },
            direccion: {
                group: '.col-md-3',
                validators: {
                    notEmpty: {
                        message: 'Debe ingresar un domicilio'
                    },
                    regexp: {
                        message: 'solo letras y numeros'
                    },
                    stringLength: {
                        min: 5,
                        message: 'Debe tener minimo 5 letras'
                    }
                }
            }



        }
    })
    //    validacion ejercicio 4 tp1
    $('#eje4').bootstrapValidator({

        message: 'oohh!! Este valor es totalmente invalido',

        feedbackIcons: {

            valid: 'far fa-check-circle has-success help-success' + 'ok',

            invalid: 'fa fa-times has-error help-block',

            validating: 'fa fa-circle yessss'

        },

        fields: { //campos o id

            nombre: {
                group: '.col-md-4',

                validators: {

                    notEmpty: {

                        message: 'El nombre de usuario es requerido <br>'

                    },

                    regexp: {
                        message: 'Debe contener solo letra <br>'
                    },
                    stringLength: {
                        min: 4,
                        message: 'Debe superar los 4 caracteres <br>'
                    }

                }

            },

            apellido: {
                group: '.col-md-4',

                validators: {

                    notEmpty: {

                        message: 'el apellido es obligatorio'

                    },
                    regexp: {
                        message: 'Debe contener solo letra <br>'
                    },
                    stringLength: {
                        min: 4,
                        message: 'Debe superar los 4 caracteres <br>'
                    }

                }

            },

            edad: {
                group: '.col-md-4',

                validators: {

                    notEmpty: {
                        message: 'La edad es obligatoria'
                    },
                    between: {
                        min: 5,
                        max: 90,
                        message: 'el valor debe estar entre 5 y 90 <br>'

                    }

                }

            },
            direccion: {
                group: '.col-md-4',
                validators: {
                    notEmpty: {
                        message: 'Debe ingresar un domicilio'
                    },
                    regexp: {
                        message: 'solo letras y numeros'
                    },
                    stringLength: {
                        min: 5,
                        message: 'Debe tener minimo 5 letras'
                    }
                }
            }

        }
    })

    //validacion ejercicio 5 tp 1
    $('#eje5').bootstrapValidator({

        message: 'oohh!! Este valor es totalmente invalido',

        feedbackIcons: {

            valid: 'far fa-check-circle has-success help-success',

            invalid: 'fa fa-times has-error help-block',

            validating: 'fa fa-circle '

        },

        fields: { //campos o id

            nombre: {
                group: '.col-md-3',

                validators: {

                    notEmpty: {

                        message: 'El nombre de usuario es requerido <br>'

                    },

                    regexp: {
                        message: 'Debe contener solo letra <br>'
                    },
                    stringLength: {
                        min: 4,
                        message: 'Debe superar los 4 caracteres <br>'
                    }

                }

            },

            apellido: {
                group: '.col-md-3',

                validators: {

                    notEmpty: {

                        message: 'el apellido es obligatorio'

                    },
                    regexp: {
                        message: 'Debe contener solo letra <br>'
                    },
                    stringLength: {
                        min: 4,
                        message: 'Debe superar los 4 caracteres <br>'
                    }

                }

            },

            edad: {
                group: '.col-md-3',

                validators: {

                    notEmpty: {
                        message: 'La edad es obligatoria'
                    },
                    between: {
                        min: 5,
                        max: 90,
                        message: 'el valor debe estar entre 5 y 90 <br>'

                    }

                }

            },
            direccion: {
                group: '.col-md-3',
                validators: {
                    notEmpty: {
                        message: 'Debe ingresar un domicilio'
                    },
                    regexp: {
                        message: 'solo letras y numeros'
                    },
                    stringLength: {
                        min: 5,
                        message: 'Debe tener minimo 5 letras'
                    }
                }
            },
            sexo: {
                group: '.col-md-4',
                validators: {
                    notEmpty: {
                        message: 'seleccion obligatoria'
                    }
                }
            },
            estudios: {
                group: '.col-md-3',
                validators: {
                    notEmpty: {
                        message: 'Debe Seleccionar nivel de estudios.'
                    }
                }
            }
        }
    })
    //validacion formulario 6 tp1
    $('#eje6').bootstrapValidator({

        message: 'oohh!! Este valor es totalmente invalido',

        feedbackIcons: {

            valid: 'far fa-check-circle has-success help-success',

            invalid: 'fa fa-times has-error help-block',

            validating: 'fa fa-circle '

        },

        fields: { //campos o id

            nombre: {
                group: '.col-md-3',

                validators: {

                    notEmpty: {

                        message: 'El nombre de usuario es requerido <br>'

                    },

                    regexp: {
                        message: 'Debe contener solo letra <br>'
                    },
                    stringLength: {
                        min: 4,
                        message: 'Debe superar los 4 caracteres <br>'
                    }

                }

            },

            apellido: {
                group: '.col-md-3',

                validators: {

                    notEmpty: {

                        message: 'el apellido es obligatorio'

                    },
                    regexp: {
                        message: 'Debe contener solo letra <br>'
                    },
                    stringLength: {
                        min: 4,
                        message: 'Debe superar los 4 caracteres <br>'
                    }

                }

            },

            edad: {
                group: '.col-md-3',

                validators: {

                    notEmpty: {
                        message: 'La edad es obligatoria'
                    },
                    between: {
                        min: 5,
                        max: 90,
                        message: 'el valor debe estar entre 5 y 90 <br>'

                    }

                }

            },
            direccion: {
                group: '.col-md-3',
                validators: {
                    notEmpty: {
                        message: 'Debe ingresar un domicilio'
                    },
                    regexp: {
                        message: 'solo letras y numeros <br>'
                    },
                    stringLength: {
                        min: 5,
                        message: 'Debe tener minimo 5 letras <br>'
                    }
                }
            },
            sexo: {
                group: '.col-md-4',
                validators: {
                    notEmpty: {
                        message: 'seleccion obligatoria'
                    }
                }
            },
            estudios: {
                group: '.col-md-3',
                validators: {
                    notEmpty: {
                        message: 'Debe Seleccionar nivel de estudios.'
                    }
                }
            }
        }
    }) //fin validacion eje6 tp1
    //validacion ejercicio 7 tp1
    $('#eje7').bootstrapValidator({

        message: 'oohh!! Este valor es invalido',

        feedbackIcons: {

            valid: 'bi bi-hand-thumbs-up has-success help-success', // far fa-check-circle  bi bi-hand-thumbs-up

            invalid: 'fa fa-times has-error help-block',

            validating: 'fa fa-circle '

        },
        fields: {
            nro1: {

                group: '.col-md-3',

                validators: {

                    notEmpty: {

                        message: 'Ingrese un valor numerico'
                    },

                    regexp: {

                        message: 'solo numero!! <br>'
                    },
                }
            },
            nro2: {
                group: '.col-md-3',

                validators: {

                    notEmpty: {

                        message: 'Ingrese un valor numerico'
                    },

                    regexp: {

                        message: 'solo numero!! <br>'
                    },
                }
            },
            operador: {
                group: '.col-md-4',

                validators: {

                    notEmpty: {

                        message: 'Debe seleccionar alguna opcion'
                    }
                }
            }

        }

    }) //fin validacion eje7 tp1
    //validacion ejercicio 8 tp 1
    $('#eje8').bootstrapValidator({
        message: 'Campo requerido ',
        feedbackIcons: {
            valid: 'bi bi-hand-thumbs-up has-success help-success', // far fa-check-circle  bi bi-hand-thumbs-up

            invalid: 'fa fa-times has-error help-block',

            validating: 'fa fa-circle '
        },
        fields: {
            nombre: {
                validators: {
                    notEmpty: {
                        message: 'campo obligatorio'
                    },
                    regexp: {
                        message: 'Debe contener solo letras <br>'
                    },
                    stringLength: {
                        min: 5,
                        message: 'debe tener mas de 5 letras <br>'
                    }
                }
            },
            apellido: {
                validators: {
                    notEmpty: {
                        message: 'campo obligatorio'
                    },
                    regexp: {
                        message: 'Debe contener solo letras <br>'
                    },
                    stringLength: {
                        min: 5,
                        message: 'debe tener mas de 5 letras <br>'
                    }
                }
            },
            edad: {
                validators: {
                    notEmpty: {
                        message: 'Campo obligatorio'
                    },
                    between: {
                        min: 8,
                        max: 90,
                        message: 'El valor debe estar entre 8 y 90 '
                    }

                }
            },
            estudiante: {
                validators: {

                    notEmpty: {
                        message: 'Debe seleccionar si es estudiante!'
                    }

                }
            }
        }
    });//fin validator ejercicio8 tp1
    //validacion tp3 ejercicio 3 login
    $('#tp2ej3').bootstrapValidator({
        message: 'Campos obligatorio',
        feedbackIcons: {
            valid: 'far fa-check-circle has-success help-success',
            invalid: 'fa fa-times has-error help-block',
            validating: 'fa fa-circle'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es obligatorio'
                    },
                        stringLength:{
                            min:5,
                            max:8,
                            message:'El nombre debe tener entre 5 y 8 letras!'
                        },
                        regexp: {

                            message: 'No se permiten numeros!! <br>'
                        },                    
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es obligatorio'
                    },
                    // stringLength:{
                    //     min:5,
                    //     max:8,
                    //     message:'El nombre debe tener entre 5 y 8 letras!'
                    // },
                    // regexp: {

                    //     message: 'solo letras!! <br>'
                    // },                    
                }
            }
        }


    })

}); //fin funcion bootstrapValidator!