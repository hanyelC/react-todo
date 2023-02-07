import { useState } from 'react';
import { CreateButton } from '../CreateButton';
import { Header } from '../Header';
import { Input } from '../Input';
import { Task } from '../Task';
import { TasksPlaceholder } from '../TasksPlaceholder';
import styles from './styles.module.css';

type TaskData = {
  id: string;
  done: boolean;
  text: string;
};

export function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [newTaskValue, setNewTaskValue] = useState<string>('');

  const totalOfTasks = tasks.length;

  const totalOfDoneTasks = tasks.reduce((accumulator, { done }) => {
    if (done) accumulator++;
    return accumulator;
  }, 0);

  const handleCreateTask = () => {
    if (newTaskValue.length === 0) return;

    const id = `${new Date().toISOString()} ${newTaskValue}`;

    const newTask: TaskData = {
      done: false,
      id,
      text: newTaskValue
    };

    setTasks((prevState) => [...prevState, newTask]);

    setNewTaskValue('');
  };

  const handleRemoveTask = (taskId: string) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  };

  const handleToggleTask = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (taskId === task.id) task.done = !task.done;

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className={styles.App}>
      <Header />

      <main className={styles.main}>
        <div className={styles['new-task']}>
          <Input
            onChange={(e) => setNewTaskValue(e.target.value)}
            value={newTaskValue}
          />
          <CreateButton onClick={handleCreateTask} />
        </div>
        <div className={styles['tasks-container']}>
          <div className={styles['tasks-header']}>
            <div>
              <span>Tarefas criadas</span>
              <span className={styles.counter}>{totalOfTasks}</span>
            </div>
            <div>
              <span>Concluídas</span>
              <span
                className={styles.counter}
              >{`${totalOfDoneTasks} de ${totalOfTasks}`}</span>
            </div>
          </div>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={task.id}
                done={task.done}
                onRemoveTask={() => {
                  handleRemoveTask(task.id);
                }}
                onToggleTask={() => {
                  handleToggleTask(task.id);
                }}
                text={task.text}
              />
            ))
          ) : (
            <TasksPlaceholder />
          )}
        </div>
      </main>
    </div>
  );
}
