import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseConexion } from "../supabase/supabase.js";

const ContextOfUsuarios = createContext();

const UserProvider = ({ children }) => {
  const redireccionar = useNavigate();

  const valorInicialSesion = false;
  const valorInicialUsuarioSesion = null;

  /* Usuario */
  const [sesionIniciada, setSesionIniciada] = useState(valorInicialSesion);
  const [estadoUsuario, setEstadoUsuario] = useState(valorInicialUsuarioSesion);

  const estadoInicialFormularioLogIn = {
    email: "",
    password: "",
  };

  const estadoInicialFormularioSignUp = {
    name: "",
    email: "",
    password: "",
  };

  const estadoInicialErrores = [];
  const valoresInicialesAlerta = { inicioSesion: false, registro: false };

  const [estadoInicioSesion, setEstadoInicioSesion] = useState(
    estadoInicialFormularioLogIn
  );
  const [erroresInicioSesion, setErroresInicioSesion] =
    useState(estadoInicialErrores);

  const [estadoRegistro, setEstadoRegistro] = useState(
    estadoInicialFormularioSignUp
  );
  const [erroresRegistro, setErroresRegistro] = useState(estadoInicialErrores);

  const [estadosAlertas, setEstadosAlertas] = useState(valoresInicialesAlerta);

  const actualizarDatoRegistro = (evento) => {
    const { name, value } = evento.target;
    setEstadoRegistro({ ...estadoRegistro, [name]: value });
  };

  const actualizarDatoInicioSesion = (evento) => {
    const { name, value } = evento.target;
    setEstadoInicioSesion({ ...estadoInicioSesion, [name]: value });
  };

  const registrarUsuario = async () => {
    if (comprobarFormularioRegister()) {
      try {
        const { data, error } = await supabaseConexion.auth.signUp({
         
          email: estadoRegistro.email,
          password: estadoRegistro.password,
          options: {
            data: {
               name: estadoRegistro.name,
            },
          },
        });
        if (error) throw error;
        mostrarAlertaRegistro();
        redireccionar("/");
        //Vaciar formulario.
        setEstadoRegistro(estadoInicialFormularioSignUp);
      } catch (error) {
        setErroresRegistro([error.message]);
      }
    }
  };

  const iniciarSesionUsuario = async () => {
    console.log(estadoInicioSesion);

    if (comprobarFormularioInicioSesion()) {
      try {
        const { data, error } = await supabaseConexion.auth.signInWithPassword({
          email: estadoInicioSesion.email,
          password: estadoInicioSesion.password,
        });

        console.log(error);

        if (error) throw error;
        redireccionar("/");
        mostrarAlertaInicioSesion();
        //Vaciar formulario.
        setEstadoInicioSesion(estadoInicialFormularioLogIn);
      } catch (error) {
        //Si da este error avismos al usuario que la contraseña esta mal puesta o que no existe una cuneta con esos datos de sesión.
        if (error.message === "Invalid login credentials") {
          setErroresInicioSesion([
            "No existe la cuenta ,prueba con otra contraseña o crea una nueva cuenta.",
          ]);
        } else {
          setErroresInicioSesion([error.message]);
        }
      }
    }
  };

  const cerrarSesionUsuario = async () => {
    try {
      const { data, error } = await supabaseConexion.auth.signOut();
      if (error) throw error;
      setSesionIniciada(false);
      redireccionar("/");
    } catch (error) {
      throw error.message;
    }
  };

  const comprobarFormularioRegister = () => {
    setErroresRegistro(estadoInicialErrores);

    let formularioCorrecto = true;

    // Expresión regular para validar el formato del correo electrónico.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar que el campo de correo electrónico no esté vacío y cumpla el formato.
    if (!estadoRegistro.email || !emailPattern.test(estadoRegistro.email)) {
      formularioCorrecto = false;
      setErroresRegistro((prevErrores) => [
        ...prevErrores,
        "Error en el formato del email. Introduce un email válido.",
      ]);
    }

    // Validar que el campo de contraseña no esté vacío y no supere los 15 caracteres.
    if (!estadoRegistro.password || estadoRegistro.password.length > 15) {
      formularioCorrecto = false;
      setErroresRegistro((prevErrores) => [
        ...prevErrores,
        "La contraseña no puede estar vacía y no puede tener más de 15 caracteres.",
      ]);
    }

    return formularioCorrecto;
  };

  const comprobarFormularioInicioSesion = () => {
    setErroresInicioSesion(estadoInicialErrores);

    let formularioCorrecto = true;

    // Validar que el campo de correo electrónico no esté vacío.
    if (!estadoInicioSesion.email) {
      formularioCorrecto = false;
      setErroresInicioSesion((prevErrores) => [
        ...prevErrores,
        "El campo de correo electrónico no puede estar vacío.",
      ]);
    }

    // Validar que el campo de contraseña no esté vacío.
    if (!estadoInicioSesion.password) {
      formularioCorrecto = false;
      setErroresInicioSesion((prevErrores) => [
        ...prevErrores,
        "El campo de contraseña no puede estar vacío.",
      ]);
    }

    return formularioCorrecto;
  };

  const mostrarAlertaInicioSesion = () => {
    setEstadosAlertas({ ...estadosAlertas, inicioSesion: true });
    setTimeout(() => {
      setEstadosAlertas({ ...estadosAlertas, inicioSesion: false });
    }, 2000);
  };

  const mostrarAlertaRegistro = () => {
    setEstadosAlertas({ ...estadosAlertas, registro: true });
    setTimeout(() => {
      setEstadosAlertas({ ...estadosAlertas, registro: false });
    }, 2000);
  };

  const datosAExportar = {
    actualizarDatoRegistro,
    actualizarDatoInicioSesion,
    registrarUsuario,
    cerrarSesionUsuario,
    iniciarSesionUsuario,
    erroresInicioSesion,
    sesionIniciada,
    erroresRegistro,
    estadosAlertas,
    estadoUsuario,
  };

  useEffect(() => {
    const suscripcion = supabaseConexion.auth.onAuthStateChange(
      (evento, session) => {
        //Si cambia la sesion ponemos la sesion iniciada a true y guardamos el usuario y si no restablecemos todo y redicreccionamos al inicio.
        if (session) {
          setEstadoUsuario(session.user);
          setSesionIniciada(true);
        } else {
          setSesionIniciada(false);
          setEstadoUsuario(valorInicialUsuarioSesion);
          redireccionar("/log_in");
        }
      }
    );
  }, []);

  return (
    <ContextOfUsuarios.Provider value={datosAExportar}>
      {children}
    </ContextOfUsuarios.Provider>
  );
};

export default UserProvider;
export { ContextOfUsuarios };
