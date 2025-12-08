import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");

  // --- NEW: Checkboxes ---
  const [filters, setFilters] = useState({
    name: true,
    image: true,
    backgrounds: true,
    classes: true,
    extra: true,
    funfact: true,
    platform: true,
    quote: true,
    links: true
  });

  // Load student JSON from API
  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setFiltered(data);
      });
  }, []);

  // Navigation
  const next = () => {
    setIndex((index + 1) % filtered.length);
  };

  const prev = () => {
    setIndex((index - 1 + filtered.length) % filtered.length);
  };

  // Search by first+last name
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const results = students.filter((s) =>
      `${s.name?.first} ${s.name?.last}`.toLowerCase().includes(value)
    );

    setFiltered(results);
    setIndex(0);
  };

  // Checkbox handler
  const handleCheckbox = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });
  };

  if (filtered.length === 0)
    return <p style={{ textAlign: "center" }}>Loading students...</p>;

  const s = filtered[index];

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h2>Student Directory</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "1rem",
        }}
      />

      {/* Counter */}
      <p><strong>{filtered.length}</strong> introductions found</p>

      {/* NEW: Checkboxes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "6px",
          marginBottom: "20px",
        }}
      >
        {Object.keys(filters).map((key) => (
          <label key={key}>
            <input
              type="checkbox"
              name={key}
              checked={filters[key]}
              onChange={handleCheckbox}
            />{" "}
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        ))}
      </div>

      {/* Student Display */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          background: "white",
        }}
      >
        {/* Name */}
        {filters.name && (
          <h3>
            {s.name?.first} {s.name?.last}
          </h3>
        )}

        {/* Image */}
{filters.image && s.media?.hasImage && (
  <img
    src={`https://dvonb.xyz${s.media.src}`}
    alt={s.media.caption}
    style={{
      maxWidth: "200px",
      borderRadius: "10px",
      marginBottom: "10px",
    }}
  />
)}

        {/* Backgrounds */}
        {filters.backgrounds && (
          <>
            <p><strong>Personal Background:</strong> {s.backgrounds?.personal}</p>
            <p><strong>Professional Background:</strong> {s.backgrounds?.professional}</p>
            <p><strong>Academic Background:</strong> {s.backgrounds?.academic}</p>
            <p><strong>Course Background:</strong> {s.backgrounds?.subject}</p>
          </>
        )}

        {/* Platform */}
        {filters.platform && (
          <p>
            <strong>Platform:</strong> {s.platform?.device} — {s.platform?.os}
          </p>
        )}

        {/* Courses */}
        {filters.classes && (
          <>
            <h4>Courses:</h4>
            <ul>
              {s.courses?.map((c, i) => (
                <li key={i}>
                  {c.dept} {c.num} — {c.name}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Fun fact */}
        {filters.funfact && <p><strong>Fun Fact:</strong> {s.funFact}</p>}

        {/* Extra info */}
        {filters.extra && (
          <p><strong>Something Else:</strong> {s.additional}</p>
        )}

        {/* Placeholder: API doesn't include a quote field */}
        {filters.quote && (
          <blockquote>
            <em>No quote provided.</em>
          </blockquote>
        )}

        {/* Links */}
        {filters.links && (
          <div>
            <strong>Links:</strong>
            <ul>
              {s.links?.web && (
                <li>
                  <a href={s.links.web} target="_blank">Website</a>
                </li>
              )}
              {s.links?.github && (
                <li>
                  <a href={s.links.github} target="_blank">GitHub</a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button style={{ padding: "10px 20px", marginRight: "10px" }} onClick={prev}>
          ⬅ Previous
        </button>
        <button style={{ padding: "10px 20px" }} onClick={next}>
          Next ➡
        </button>
      </div>

      <p style={{ textAlign: "center", marginTop: "15px" }}>
        Showing {index + 1} of {filtered.length}
      </p>
    </div>
  );
}