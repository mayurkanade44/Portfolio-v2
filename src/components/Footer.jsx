const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="row">
        <div className="col-md-6 footer-copywright">
          <h3 >© {new Date().getFullYear()} Mayur Kanade</h3>
        </div>
        <div className="col-md-6 footer-copywright">
          <h3 >All Rights Reserved</h3>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
