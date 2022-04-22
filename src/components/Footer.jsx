const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="row">
        <div className="col-md-6 footer-copywright">
          <h3 class="mx-auto">© {new Date().getFullYear()} Mayur Kanade</h3>
        </div>
        <div className="col-md-6 footer-copywright">
          <h3 class="mx-auto">All Rights Reserved</h3>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
