import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";

import SearchBar from "../components/task/SearchBar";
import TaskInput from "../components/task/TaskInput";
import TaskList from "../components/task/TaskList";
import TaskStats from "../components/task/TaskStats";

import useTasks from "../hooks/useTasks";

function Home() {
  const {
    tasks,
    allTasks,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    search,
    setSearch,
  } = useTasks();

  return (
    <div className="home-page">
      <Navbar />

      <Container>
        <TaskStats tasks={allTasks} />

        <div className="search-bar-section">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <TaskInput addTask={addTask} />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      </Container>
    </div>
  );
}

export default Home;