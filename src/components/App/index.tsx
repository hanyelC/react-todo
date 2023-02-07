import { useEffect, useState } from 'react';
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

  const orderedTasks = [...tasks].sort((a, b) => {
    console.log(a, b)
    if (!a.done && b.done) return -1;
    return 0;
  });

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

    const updatedTasks = [newTask, ...tasks];

    saveTasksToLocalStorage(updatedTasks);
    setTasks(updatedTasks);

    setNewTaskValue('');
  };

  const handleRemoveTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    saveTasksToLocalStorage(updatedTasks);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (taskId === task.id) task.done = !task.done;

      return task;
    });

    saveTasksToLocalStorage(updatedTasks);
    setTasks(updatedTasks);
  };

  const tasksLocalStorageKey = '@TASKS';

  const saveTasksToLocalStorage = (tasks: TaskData[]) => {
    localStorage.setItem(tasksLocalStorageKey, JSON.stringify(tasks));
  };

  const getTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem(tasksLocalStorageKey) ?? '[]';

    return JSON.parse(tasks);
  };

  useEffect(() => {
    const tasks = getTasksFromLocalStorage();

    setTasks(tasks);
  }, []);

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
            <div className={styles['tasks-list']}>
              {orderedTasks.map((task) => (
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
              ))}
            </div>
          ) : (
            <TasksPlaceholder />
          )}
        </div>
      </main>
    </div>
  );
}
