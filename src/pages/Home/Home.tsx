import { useAppDispatch, useAppSelector } from "@/store";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { loadAllProjects } from "@/features/projectSlice/projectActions";
import { Loader } from "@/reusables";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useQueryParams } from "@/hooks";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector((state) => state.project);
  const navigate = useNavigate();
  const queryParams = useQueryParams();

  useEffect(() => {
    dispatch(loadAllProjects("user-1"));
  }, []);

  const getNavigationUrl = (link: string, projectId: string) => {
    queryParams.set("projectId", projectId);
    return `${link}?${queryParams.toString()}`;
  };

  return (
    <main className={styles.home}>
      <h1>All Projects</h1>
      <p>These are all your projects</p>
      {projects.length <= 0 ? (
        <Loader />
      ) : (
        <div className={styles.projectsGroup}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.projectCard}
              onClick={() =>
                navigate(getNavigationUrl("/app/dashboard", project.id))
              }
            >
              <span className={styles.head}>{project.name}</span>
              <span className={styles.desc}>{project.description}</span>
              <span className={styles.updatedAt}>
                {moment(project.updatedAt).fromNow()}
              </span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export { Home };
