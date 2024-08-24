import { useAppDispatch, useAppSelector } from "@/store";
import styles from "./WidgetForm.module.css";
import {
  addNewWidget,
  addWidgetKey,
  clearEdittingWidget,
  toggleWidgetForm,
  updateWidget,
} from "@/features";
import { useEffect, useState } from "react";
import { Dropdown, IconButton, InputBar } from "@/reusables";
import { v4 as uuidv4 } from "uuid";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { Data } from "@/types";
import { useQueryParams } from "@/hooks";
import { useNavigate } from "react-router-dom";

const WidgetForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isWidgetForm } = useAppSelector((state) => state.appState);
  const { categories } = useAppSelector((state) => state.category);
  const [isCreating, setIsCreating] = useState<boolean>(true);
  const [widgetName, setWidgetName] = useState<string>("");
  const [widgetType, setWidgetType] = useState<number>(0);
  const [dataRows, setDataRows] = useState<string[]>([""]);
  const [dataColumns, setDataColumns] = useState<string[][]>([[""]]);
  const widgetTypes = ["pie", "bar", "line"];
  const queryParams = useQueryParams();
  const navigate = useNavigate();
  const { edittingWidget: widget } = useAppSelector((state) => state.appState);

  useEffect(() => {
    if (widget) {
      setIsCreating(false);
      setWidgetName(widget.name);
      setWidgetType(widgetTypes.indexOf(widget.type));
      setDataRows(
        Array.from({ length: widget.data.length }, (_, i) => {
          return widget.data[i].label;
        })
      );
      setDataColumns(
        Array.from({ length: widget.data.length }, (_, i) => {
          const result = [widget.data[i].v1.toString()];
          if (widget.data[i].v2) result.push(widget.data[i].v2.toString());
          if (widget.data[i].v3) result.push(widget.data[i].v3.toString());
          return result;
        })
      );
    } else {
      setIsCreating(true);
    }
  }, [widget]);

  const handleDataRowIncrease = () => {
    if (dataRows.length == 6) {
      alert("Rows can be maximum 6");
      return;
    }
    const columnsNum = dataColumns[0].length;
    setDataColumns((prev) =>
      prev.concat([Array.from({ length: columnsNum }, () => "")])
    );
    setDataRows((prev) => prev.concat([""]));
  };

  const handleDataRowDecrease = () => {
    if (dataRows.length < 1) {
      alert("Rows are already 0");
      return;
    }
    setDataRows((prev) => prev.slice(0, -1));
    setDataColumns((prev) => prev.slice(0, -1));
  };

  const handleDataColumnIncrease = () => {
    if (dataColumns[0].length == 3) {
      alert("Columns can be maximum 3");
      return;
    }
    setDataColumns((prev) => {
      return prev.map((row) => {
        return row.concat([""]);
      });
    });
  };

  const handleDataColumnDecrease = () => {
    if (dataColumns[0].length < 2) {
      alert("Columns must be atleast 1");
      return;
    }

    setDataColumns((prev) => {
      return prev.map((row) => {
        return row.slice(0, -1);
      });
    });
  };

  const parseData = async (id?: string) => {
    const dataLength = dataRows.length;
    const data = Array.from({ length: dataLength }, (_, i) => {
      return {
        label: dataRows[i],
        v1: Number.parseInt(dataColumns[i][0]),
        v2: dataColumns[i][1] ? Number.parseInt(dataColumns[i][1]) : undefined,
        v3: dataColumns[i][2] ? Number.parseInt(dataColumns[i][2]) : undefined,
      };
    }) as Data[];
    const widgetId = id ?? uuidv4();
    const [categoryId, projectId] = await Promise.all([
      queryParams.get("categoryId")!,
      queryParams.get("projectId")!,
    ]);
    const widget = {
      id: widgetId,
      name: widgetName,
      type: widgetTypes[widgetType] as "pie" | "bar" | "line",
      categoryId: categoryId,
      projectId: projectId,
      data: data,
    };
    return widget;
  };

  const submitWidget = async (e: React.FormEvent) => {
    e.preventDefault();
    const widget = await parseData();
    dispatch(addNewWidget(widget));
    dispatch(
      addWidgetKey({ categoryId: widget.categoryId, widgetId: widget.id })
    );
    discardWidget();
  };

  const discardWidget = () => {
    setWidgetName("");
    setWidgetType(0);
    setDataRows([""]);
    setDataColumns([[""]]);
    clearForm();
  };

  const updateWidgetLocal = async (e: React.FormEvent) => {
    e.preventDefault();
    const localWidget = await parseData(widget!.id);
    dispatch(updateWidget(localWidget));
    discardWidget();
  };

  const clearForm = () => {
    dispatch(toggleWidgetForm());
    dispatch(clearEdittingWidget());
    queryParams.delete("categoryId");
    navigate(`/app/dashboard?${queryParams.toString()}`);
  };

  if (categories.length === 0) {
    return null;
  }

  return (
    <>
      <div
        className={`${styles.wrapper} ${isWidgetForm ? styles.open : ""}`}
        onClick={() => dispatch(toggleWidgetForm())}
      ></div>
      <form
        className={`${styles.form} ${isWidgetForm ? styles.open : ""}`}
        onSubmit={isCreating ? submitWidget : updateWidgetLocal}
      >
        <h1>Create A New Widget</h1>
        <InputBar
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          label="Name"
          name="widgetName"
          type="text"
          placeholder="Widget Name"
          required
        ></InputBar>
        <label htmlFor="widgetType">Widget Type</label>
        <Dropdown
          icon={
            widgetTypes[widgetType] == "pie" ? (
              <FaChartPie />
            ) : widgetTypes[widgetType] == "bar" ? (
              <FaChartBar />
            ) : (
              <FaChartLine />
            )
          }
          items={["Pie", "Bar", "Line"]}
          state={[widgetType, setWidgetType]}
        />
        <div className={styles.dataChange}>
          <label>Add or Remove Data Rows</label>
          <IconButton size="sm" onClick={handleDataRowIncrease}>
            <FaPlus />
          </IconButton>
          <IconButton size="sm" onClick={handleDataRowDecrease}>
            <FaMinus />
          </IconButton>
        </div>
        <div className={styles.dataChange}>
          <label>Add or Remove Data Columns</label>
          <IconButton size="sm" onClick={handleDataColumnIncrease}>
            <FaPlus />
          </IconButton>
          <IconButton size="sm" onClick={handleDataColumnDecrease}>
            <FaMinus />
          </IconButton>
        </div>
        <ul className={styles.dataRowList}>
          {dataRows.map((row, index) => (
            <li key={index} className={styles.dataRow}>
              <InputBar
                value={row}
                onChange={(e) => {
                  setDataRows((prev) => {
                    prev[index] = e.target.value;
                    return [...prev];
                  });
                }}
                name="dataRow"
                type="text"
                placeholder={`Data Row ${index + 1}`}
                required
              ></InputBar>
              <div className={styles.dataColumns}>
                {dataColumns[index].map((column, id) => (
                  <InputBar
                    key={id}
                    value={column}
                    onChange={(e) => {
                      setDataColumns((prev) => {
                        prev[index][id] = e.target.value;
                        return [...prev];
                      });
                    }}
                    name="dataColumn"
                    type="number"
                    placeholder={`v${id + 1}`}
                    required
                  ></InputBar>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className={`flex ${styles.buttons}`}>
          <button type="submit">Create</button>
          <button onClick={discardWidget}>Discard</button>
        </div>
      </form>
    </>
  );
};

export { WidgetForm };
