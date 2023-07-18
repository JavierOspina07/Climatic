import { useState, useEffect } from "react";
import './style/DarkMode.css'

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Obtener el modo oscuro del almacenamiento local al cargar el componente
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    // Guardar el modo oscuro en el almacenamiento local al cambiar su estado
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Aplicar cambios en el modo oscuro al montar y actualizar el componente
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
      <div className="wrapper">
        <input
          type="checkbox"
          id="hide-checkbox"
          defaultChecked={!darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="hide-checkbox" className="toggle">
          <span className="toggle-button">
            <span className="crater crater-1"></span>
            <span className="crater crater-2"></span>
            <span className="crater crater-3"></span>
            <span className="crater crater-4"></span>
            <span className="crater crater-5"></span>
            <span className="crater crater-6"></span>
            <span className="crater crater-7"></span>
          </span>
          <span className="star star-1"></span>
          <span className="star star-2"></span>
          <span className="star star-3"></span>
          <span className="star star-4"></span>
          <span className="star star-5"></span>
          <span className="star star-6"></span>
          <span className="star star-7"></span>
          <span className="star star-8"></span>
        </label>
      </div>
  );
};

export default DarkMode;
