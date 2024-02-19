import { InputHTMLAttributes } from "react";

interface PropsTaskItens extends InputHTMLAttributes<HTMLInputElement> {
  dataTask:tasksItensProps;
  handleTaskToggle: (dataTask:tasksItensProps) => void;
  handleTaskRemove: (id:string) => void;
}

import StylesTaskItens from "./TaskItens.module.css";
import { CheckboxIcon } from "../../Icons/CheckboxIcon";
import { TrashIcon } from "../../Icons/TrashIcon";
import { tasksItensProps } from "../../../App";

export function TaskItens({
  dataTask,
  handleTaskToggle,
  handleTaskRemove,
  ...rest
}: PropsTaskItens) {

  const checkboxCheckedClassname = dataTask.isCompleted
    ? StylesTaskItens["checkbox-checked"]
    : StylesTaskItens["checkbox-unchecked"];

  const paragraphCheckedClassname = dataTask.isCompleted
    ? StylesTaskItens["paragraph-checked"]
    : "";


  return (
    <div className={StylesTaskItens.container}>
      <div className={StylesTaskItens.contentCheckbox}>
        <label htmlFor="checkbox" onClick={()=>{
            handleTaskToggle(dataTask)
        }}>
          <input readOnly type="checkbox" checked={dataTask.isCompleted} {...rest} />
          <span
            className={`${StylesTaskItens.checkbox} ${checkboxCheckedClassname}`}
          >
            {dataTask.isCompleted && (
              <CheckboxIcon
                width="1rem"
                height="1.5rem"
                fillBackground="var(--purple-dark)"
                fillColor="var(--gray-100)"
              />
            )}
          </span>
          <p
            className={`${StylesTaskItens.paragraph} ${paragraphCheckedClassname}`}
          >
            {dataTask.text}
          </p>
        </label>
      </div>

      <button onClick={()=>{
        handleTaskRemove(dataTask.id)
      }}>
        <TrashIcon width="1.8rem" height="1.8rem" />
      </button>
    </div>
  );
}
