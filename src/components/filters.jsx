function Filters() {
  return (
    <div className="d-flex flex-column">
      <div className="filters-wrap">
        <div>
          <h6 className="mt-3">Date</h6>
          <div className="mt-3 border">
            <input
              type="date"
              className="special-input"
              placeholder="Enter your name"
            ></input>
          </div>
          <h6 className="mt-3">Type</h6>
          <div className="mt-3 border">
            <select className="special-select">
              <option value="longabsent" selected>
                Continuosly absent
              </option>
              <option value="late">Late</option>
              <option value="absent">Absent</option>
            </select>
          </div>
          <h6 className="mt-3">Who</h6>
          <div className="mt-3 border">
            <select className="special-select">
              <option disabled selected>
                Select the course
              </option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <h6 className="mt-3">Course</h6>
          <div className="mt-3 border">
            <select className="special-select">
              <option disabled selected>
                Select the course
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <h6 className="mt-3">Group</h6>
          <div className="mt-3 border">
            <select className="special-select">
              <option disabled selected>
                Select the group
              </option>
              //ALL GROUPS GOES HERE
              <option value="IT-2101">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
