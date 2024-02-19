/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-labels */

import {v4 as uuidv4 }from "uuid";



export interface tasksItensProps {
  id:string;
  text: string;
  isCompleted: boolean;
}

interface tasksProps {
  tasks: Array<tasksItensProps>
}

export const dataTasks : tasksProps = {
  tasks:[
    {
      id: uuidv4(),
      text: "Lorem ipsum lacinia justo facilisis libero rutrum turpis mollis, dictum convallis feugiat ante nam accumsan pellentesque auctor nisl, et vulputate tempus felis aliquam sagittis vehicula",
      isCompleted: true,
    },
    {
      id: uuidv4(),
      text: "Cras ultricies sed dictum ultricies varius ac fermentum donec aliquam vestibulum, duis nullam velit leo dolor blandit aenean rutrum dictumst, nisi volutpat litora imperdiet purus ipsum aenean inceptos vel.",
      isCompleted: true,
    },
    {
      id: uuidv4(),
      text: "Hac purus dictumst at potenti mi fusce pellentesque fames, litora fusce non felis vestibulum semper vulputate, fames at vel primis donec aliquet gravida.",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: "Tortor nullam vitae tempor fames sodales, sagittis ante lacus curabitur, integer ipsum class nulla.",
      isCompleted: false,
    },
  ]
}

