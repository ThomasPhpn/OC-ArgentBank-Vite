const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="text-center border-t-2 border-neutral-600 text-neutral-600">
        <p className="py-6">
          &copy; {currentYear} Argent Bank. Tous Droits Réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
