import { useParams } from "react-router-dom";

function ChapterDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "30px" }}>
      <h1>Chapter {id}</h1>

      <p>
        Welcome to Chapter {id}
      </p>
    </div>
  );
}

export default ChapterDetails;