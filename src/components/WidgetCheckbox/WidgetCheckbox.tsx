import { useState } from "react";
import { useAppDispatch } from "@/store";
import {
  setEdittingWidget,
  toggleRenderOfWidget,
  toggleWidgetForm,
} from "@/features";
import { IconButton } from "@/reusables";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Widget } from "@/types";
import { useQueryParams } from "@/hooks";
import { useNavigate } from "react-router-dom";

interface WidgetCheckboxProps {
  checked: boolean;
  widget: Widget;
  onDelete: () => void;
}

const WidgetCheckbox: React.FC<Readonly<WidgetCheckboxProps>> = ({
  widget,
  checked,
  onDelete,
}) => {
  const [checkedBox, setIsCheckedBox] = useState(checked);

  const dispatch = useAppDispatch();
  const queryParams = useQueryParams();
  const navigate = useNavigate();
  const editWidget = () => {
    queryParams.set("categoryId", widget.categoryId);
    navigate(`/app/dashboard?${queryParams.toString()}`);
    dispatch(toggleWidgetForm());
    dispatch(setEdittingWidget(widget));
  };

  return (
    <>
      <li>
        <label htmlFor={widget.name}>{widget.name}</label>
        <input
          type="checkbox"
          name={widget.name}
          id={widget.name}
          checked={checkedBox}
          onChange={(e) => {
            setIsCheckedBox(e.target.checked);
            dispatch(
              toggleRenderOfWidget({
                categoryId: widget.categoryId,
                widgetId: widget.id,
              })
            );
          }}
        />
        <IconButton size="sm" onClick={onDelete}>
          <FaTrash />
        </IconButton>
        <IconButton size="sm" onClick={editWidget}>
          <FaPencil />
        </IconButton>
      </li>
    </>
  );
};

export { WidgetCheckbox };
