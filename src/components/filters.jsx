import { useState } from "react";

function Filters({ filters, setFilters }) {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [who, setWho] = useState("");
  const [course, setCourse] = useState("");
  const [group, setGroup] = useState("");

  const handleApplyFilters = () => {
    setFilters({ date, type, who, course, group });
  };

  return (
    <div className="d-flex flex-column">
      <div className="filters-wrap">
        <div>
          <h6 className="mt-3">Date</h6>
          <div className="mt-3 border">
            <input
              type="date"
              className="special-input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <h6 className="mt-3">Type</h6>
          <div className="mt-3 border">
            <select
              className="special-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option disabled value="">
                Select type
              </option>
              <option value="longabsent">Continuosly absent</option>
              <option value="late">Late</option>
              <option value="absent">Absent</option>
            </select>
          </div>
          <h6 className="mt-3">Who</h6>
          <div className="mt-3 border">
            <select
              className="special-select"
              value={who}
              onChange={(e) => setWho(e.target.value)}
            >
              <option disabled value="">
                Select who
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="other">Other</option>
            </select>
          </div>
          <h6 className="mt-3">Course</h6>
          <div className="mt-3 border">
            <select
              className="special-select"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option disabled value="">
                Select course
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <h6 className="mt-3">Group</h6>
          <div className="mt-3 border">
            <select
              className="special-select"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            >
              <option disabled value="">
                Select group
              </option>
              <option value="IT-2101">IT-2101</option>
              <option value="IT-2102">IT-2102</option>
              <option value="IT-2103">IT-2103</option>
            </select>
          </div>
          <button
            className="btn btn-primary btn-block mt-3"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
