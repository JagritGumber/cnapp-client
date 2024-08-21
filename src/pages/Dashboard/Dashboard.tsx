import { Navbar } from "@/components";
import "./Dashboard.css";

const Dashboard = () => {
  // TODO: Implement the dashboard component
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>Welcome to your dashboard</h1>
        <p>
          Here you can find all the information about your posts, comments,
          users and more.
        </p>
      </div>
    </>
  );
};

export default Dashboard;
