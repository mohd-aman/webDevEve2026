import { useParams } from "react-router-dom";
import RenderData from "../components/RenderData";

export default function Users() {
  const params = useParams();
  console.log(params);
  const userId = params.id;
  console.log("user-id", userId);
  return (
    <div>
      <h2>User component</h2>
      <RenderData userId={userId} />
    </div>
  );
}
