function Header() {
  return (
    <header className="container">
      <div className="row d-flex justify-content-center align-items-center py-3">
        <div className="col-6">
          <h4 className="m-0">Aitu Attendance</h4>
        </div>
        <div className="col-6">
          <a href="#" className="mx-5 text-decoration-none text-dark">
            Students
          </a>
          <a href="#" className="mx-5 text-decoration-none text-dark">
            Teachers
          </a>
          <a href="#" className="mx-5 text-decoration-none text-dark">
            Other
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
