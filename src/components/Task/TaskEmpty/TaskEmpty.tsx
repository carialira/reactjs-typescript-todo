import StylesTaskEmpty from './TaskEmpty.module.css'

import Clipboard from '../../../assets/Clipboard.png';

export function TaskEmpty() {
  return(
    <div className={StylesTaskEmpty.container}>
    <img src={Clipboard} alt="ícone de prancheta" />
    <p>
      <strong>Você ainda não tem tarefas cadastradas</strong>Crie
      tarefas e organize seus itens a fazer
    </p>
  </div>
  )
  
}