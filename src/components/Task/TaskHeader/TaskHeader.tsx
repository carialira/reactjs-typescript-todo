/* eslint-disable @typescript-eslint/no-unused-vars */
import SytlesTaskHeader from "./TaskHeader.module.css";

interface TaskHeaderProps {
  createdTaskCounter: number;
  completedTaskCounter: number;
}

export function TaskHeader({
  createdTaskCounter,
  completedTaskCounter,
}: TaskHeaderProps) {
  return (
    <div className={SytlesTaskHeader.taskHeader}>
      <aside className={SytlesTaskHeader.leftSide}>
        <p>Tarefas criadas</p>
        <span>{createdTaskCounter}</span>
      </aside>
      <aside className={SytlesTaskHeader.rightSide}>
        <p>Concluídas</p>
        <span>{completedTaskCounter}</span>
      </aside>
    </div>
  );
}
