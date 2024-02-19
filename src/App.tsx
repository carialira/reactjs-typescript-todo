/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuidv4 } from "uuid";
import { KeyboardEvent, useState } from "react";
import StylesApp from "./App.module.css";
import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { PlusIcon } from "./components/Icons/PlusIcon";
import { Input } from "./components/Input/Input";
import { TaskItens } from "./components/Task/TaskItens/TaskItens";
import { TaskHeader } from "./components/Task/TaskHeader/TaskHeader";
// import { dataTasks, tasksItensProps } from "./mock/data";

import { TaskEmpty } from "./components/Task/TaskEmpty/TaskEmpty";

export interface tasksItensProps {
  id: string;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [listTask, setListTaks] = useState<tasksItensProps[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddNewTask() {
    if (inputValue === "") {
      return;
    }

    const newTask: tasksItensProps = {
      id: uuidv4(),
      text: inputValue,
      isCompleted: false,
    };
    setListTaks((prevState) => [...prevState, newTask]);
    setInputValue("");
  }

  function handleTaskToggle(dataTask: tasksItensProps) {
    const toggleTask = listTask.map((task: tasksItensProps) => {
      if (task.id === dataTask.id) {
        return { ...task, isCompleted: true };
      }
      return { ...task };
    });

    setListTaks(toggleTask);
  }

  function handleTaskRemove(id: string) {
    const toggleTask = listTask.filter(
      (task: tasksItensProps) => task.id !== id
    );

    setListTaks(toggleTask);
  }

  const counterTaskCompleted = listTask.reduce((accumulator, currentValue) => {
    if (currentValue.isCompleted) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key == "Enter") {
      handleAddNewTask();
    }
  }

  return (
    <div className={StylesApp.container}>
      <Header />

      <div className={StylesApp.section}>
        <div className={StylesApp.taskInfo}>
          <Input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={(e) => {
              handleKeyPress(e);
            }}
            value={inputValue}
          />
          <Button
            onClick={() => {
              handleAddNewTask();
            }}
          >
            Criar{" "}
            <PlusIcon
              height={"1.6rem"}
              width={"1.6rem"}
              fill="var(--gray-100)"
            />
          </Button>
        </div>
        <div className={StylesApp.taskContent}>
          <TaskHeader
            createdTaskCounter={listTask.length}
            completedTaskCounter={counterTaskCompleted}
          />
          <div className={StylesApp.taskList}>
            <div>
              {listTask && listTask.length > 0 ? (
                listTask.map((task: tasksItensProps) => {
                  return (
                    <TaskItens
                      key={task.id}
                      checked={task.isCompleted}
                      handleTaskToggle={handleTaskToggle}
                      handleTaskRemove={handleTaskRemove}
                      dataTask={task}
                    />
                  );
                })
              ) : (
                <TaskEmpty />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
