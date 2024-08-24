import { Data } from ".";

interface Widget {
  id: string;
  name: string;
  categoryId: string;
  projectId: string;
  data: Data[];
  type: "pie" | "bar" | "line";
  createdAt: string;
  updatedAt: string;
}

export default Widget;
