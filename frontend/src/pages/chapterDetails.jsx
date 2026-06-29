import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

function ChapterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const completeChapter = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("loggedUser"));

      await API.post("/progress/complete", {
        userId: user._id,
        chapterId: Number(id),
      });

      navigate("/chapters");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Chapter {id}</h1>

      <p>Welcome to Chapter {id}</p>

      <button onClick={completeChapter}>
        Complete Chapter
      </button>
    </div>
  );
}

export default ChapterDetails;