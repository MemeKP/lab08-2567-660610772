import Header from "./components/Header"
import TaskInput from "./components/TaskInput"
import Task from "./components/Task"
import Footer from "./components/Footer"
//ปณิตา ดอนเมือง 660610772
export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
      {/* task input */}
        <TaskInput />
        {/* task */}
        <Task {...Task} />
      </div>
      {/* //footer section */}
      <Footer />
    </div>
  );
}
