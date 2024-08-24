import { Fragment, useRef, useState } from "react";
import styles from "./ManagePanel.module.css";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  deleteWidget,
  deleteWidgetKey,
  toggleConfirming,
  toggleManagingWidget,
} from "@/features";
import { WidgetCheckbox } from "../WidgetCheckbox";
import { ConfirmPrompt } from "../ConfirmPrompt";

interface ManagePanelProps {}

const ManagePanel: React.FC<Readonly<ManagePanelProps>> = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.category);
  const { widgets } = useAppSelector((state) => state.widget);
  const { isManagingWidget } = useAppSelector((state) => state.appState);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id);
  const managePanelRef = useRef<null | HTMLDivElement>(null);
  const { isConfirming } = useAppSelector((state) => state.appState);
  const [widgetToDelete, setWidgetToDelete] = useState<{
    widgetId: string;
    categoryId: string;
  } | null>(null);

  if (categories.length === 0 || widgets.length === 0) {
    return null;
  }

  const handleOnDelete = (widgetId: string, categoryId: string) => {
    setWidgetToDelete({ widgetId, categoryId });
    dispatch(toggleConfirming());
  };

  const handleConfirmDelete = () => {
    if (widgetToDelete) {
      dispatch(
        deleteWidgetKey({
          categoryId: widgetToDelete.categoryId,
          widgetId: widgetToDelete.widgetId,
        })
      );
      dispatch(deleteWidget(widgetToDelete.widgetId));
    }
    setWidgetToDelete(null);
    dispatch(toggleConfirming());
  };

  return (
    <>
      <ConfirmPrompt
        isOpen={isConfirming}
        message={`Are you sure you want to delete this widget?`}
        onConfirm={handleConfirmDelete}
        onCancel={() => dispatch(toggleConfirming())}
      />
      <div
        className={`${styles.wrapper} ${isManagingWidget ? styles.open : ""}`}
        onClick={() => {
          dispatch(toggleManagingWidget());
        }}
      />
      <aside
        ref={managePanelRef}
        className={`${styles.managePanel} ${
          isManagingWidget ? styles.open : ""
        }`}
      >
        <h1>Personalise Your Dashboard</h1>
        <ul className={styles.categories}>
          {categories.map((category, index) => (
            <Fragment key={category.id}>
              <li
                className={
                  category.id === selectedCategory ? styles.selected : ""
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </li>
              {index === categories.length - 1 && (
                <li onClick={() => {}}>Add More</li>
              )}
            </Fragment>
          ))}
        </ul>
        <ul className={styles.widgets}>
          {categories.length > 0 &&
            widgets
              .filter((widget) => widget.categoryId === selectedCategory)
              .map((widget) => {
                const category = categories.find(
                  (category) => category.id === selectedCategory
                )!;
                return (
                  <WidgetCheckbox
                    key={widget.id}
                    widget={widget}
                    checked={
                      category.widgets.find(
                        (wid) => wid.widgetId === widget?.id
                      )?.render || false
                    }
                    onDelete={() =>
                      handleOnDelete(widget.id, widget.categoryId)
                    }
                  />
                );
              })}
        </ul>
      </aside>
    </>
  );
};

export { ManagePanel };
