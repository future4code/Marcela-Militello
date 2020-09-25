import React from 'react';
import './App.css';
import { useAxiosConfigs } from './axios/AxiosConfigs';
import Planner from './components/Planner';

function App() {
  const { getTasks, tasks } = useAxiosConfigs()

  return (
    <main className="App">
      <Planner getTasks={getTasks} tasks={tasks} />
    </main>
  );
}

export default App;
