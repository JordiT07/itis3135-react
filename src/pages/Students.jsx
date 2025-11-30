import React, { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading student data...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>ITIS 3135 Students</h1>

      {students.map((student, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
            background: "#fafafa",
          }}
        >
          <h2>
            {student.firstName ?? "Unknown"} {student.lastName ?? ""}
          </h2>

          <p><strong>ID:</strong> {student.id ?? "N/A"}</p>

          <p><strong>Personal Background:</strong> {student.personalBackground ?? "N/A"}</p>
          <p><strong>Professional Background:</strong> {student.professionalBackground ?? "N/A"}</p>
          <p><strong>Academic Background:</strong> {student.academicBackground ?? "N/A"}</p>
          <p><strong>Course Background:</strong> {student.courseBackground ?? "N/A"}</p>

          <p>
            <strong>Platform:</strong>{" "}
            {typeof student.platform === "object"
              ? `${student.platform.device} - ${student.platform.os}`
              : student.platform}
          </p>

          <p><strong>Courses:</strong></p>
          <ul>
            {(student.courses ?? []).map((c, i) => (
              <li key={i}>
                {c.dept} {c.num} — {c.name}
              </li>
            ))}
          </ul>

          <p><strong>Interesting Story:</strong> {student.story ?? "N/A"}</p>
          <p><strong>Something Else:</strong> {student.somethingElse ?? "N/A"}</p>
        </div>
      ))}
    </div>
  );
}