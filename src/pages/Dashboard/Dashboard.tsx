import { Action, Loader } from "@/reusables";
import styles from "./Dashboard.module.css";
import { FaBox } from "react-icons/fa";
import { useEffect } from "react";
import { useQueryParams } from "@/hooks";
import { useAppDispatch, useAppSelector } from "@/store";
import { useNavigate } from "react-router-dom";
import {
  getAllProjectCategories,
  getWidgetsForProject,
  loadCurrentProject,
  toggleManagingWidget,
} from "@/features";
import { CardGroup } from "@/reusables/cards";
import {
  BigWidgetBarChart,
  BigWidgetLineChart,
  BigWidgetPieChart,
} from "@/reusables/widgets";

const Dashboard: React.FC = () => {
  const params = useQueryParams();
  const projectId = params.get("projectId");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentProject } = useAppSelector((state) => state.project);
  const { categories } = useAppSelector((state) => state.category);
  const { widgets } = useAppSelector((state) => state.widget);

  useEffect(() => {
    if (projectId != null && projectId.length > 0) {
      if (
        currentProject == null ||
        (currentProject != null && currentProject?.id !== projectId)
      ) {
        dispatch(loadCurrentProject(projectId!));
        dispatch(getAllProjectCategories(projectId!));
        dispatch(getWidgetsForProject(projectId!));
      }
    } else {
      navigate("/app");
    }
  }, []);

  useEffect(() => {
    console.log(widgets);
    console.log(categories);
  }, [widgets, categories]);

  return (
    <div className={styles.dashboard}>
      {currentProject == null ? (
        <Loader />
      ) : (
        <div className={styles.header}>
          <div>
            <h1>
              Performance summary{" "}
              <span className={styles.light}> For {currentProject?.name}</span>
            </h1>
            <p>
              You can add more widgets and organize existing widgets from over
              there
              {" ->"}
            </p>
          </div>
          <Action onClick={() => dispatch(toggleManagingWidget())}>
            <FaBox size={12} />
            Manage Widgets and Categories
          </Action>
        </div>
      )}
      {categories.map((category) => (
        <CardGroup
          categoryId={category.id}
          key={category.id}
          title={category.name}
          subtitle={category.description}
          size="lg"
        >
          {widgets
            .filter(
              (widget) =>
                (widget.categoryId === category.id &&
                  category.widgets.find((wid) => wid.widgetId === widget.id)
                    ?.render) ||
                false
            )
            .map((widget) => {
              if (widget.type === "pie")
                return (
                  <BigWidgetPieChart
                    name={widget.name}
                    data={widget.data}
                    key={widget.id}
                  />
                );
              if (widget.type === "bar")
                return (
                  <BigWidgetBarChart
                    name={widget.name}
                    data={widget.data}
                    key={widget.id}
                  />
                );
              if (widget.type === "line")
                return (
                  <BigWidgetLineChart
                    name={widget.name}
                    data={widget.data}
                    key={widget.id}
                  />
                );
            })}
        </CardGroup>
      ))}
    </div>
  );
};

export { Dashboard };
