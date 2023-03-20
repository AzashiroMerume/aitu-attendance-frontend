function Header() {
  return (
    <header className="container-fluid text-white">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center py-3">
          <div className="col-6">
            <h4 className="m-0">AITU Attendance</h4>
          </div>
          <div className="col-6">
            <a href="#" className="mx-5 text-decoration-none text-white">
              Students
            </a>
            <a href="#" className="mx-5 text-decoration-none text-white">
              Teachers
            </a>
            <a href="#" className="mx-5 text-decoration-none text-white">
              Other
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
