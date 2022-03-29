import React from "react";


const Note: React.FC = () => {
  return (
    <p className="note">
      <em>Note:</em> Your information is valued and respected! We will{" "}
      <span className="emphasize">never</span> share your answers with{" "}
      <span className="emphasize">anyone</span>.
    </p>
  );
};

export default Note;
