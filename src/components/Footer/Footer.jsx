import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-brand">LAB SERVICES</span>
        <span className="footer-copy">
          © {new Date().getFullYear()} Lab Services. Equipamiento de vanguardia para asegurar la calidad de los resultados analíticios de los laboratorios de la industria alimentaria. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
