import React, { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading student data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading student data...</h2>;

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
            {student.firstName} {student.lastName}
          </h2>
          <p>
            <strong>NinerNet ID:</strong> {student.id}
          </p>

          <p><strong>Personal Background:</strong> {student.personalBackground}</p>
          <p><strong>Professional Background:</strong> {student.professionalBackground}</p>
          <p><strong>Academic Background:</strong> {student.academicBackground}</p>
          <p><strong>Course Background:</strong> {student.courseBackground}</p>

          <p><strong>Primary Computer Platform:</strong> {student.platform}</p>

          <p><strong>Courses:</strong></p>
          <ul>
            {student.courses?.map((c, i) => (
              <li key={i}>
                {c.dept} {c.num} — {c.name}
              </li>
            ))}
          </ul>

          <p><strong>Interesting Story:</strong> {student.story}</p>
          <p><strong>Something Else:</strong> {student.somethingElse}</p>
        </div>
      ))}
    </div>
  );
}