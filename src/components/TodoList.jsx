import { useRecoilValue } from "recoil";
import { filteredTodosSelector } from "../selectors/filteredTodosSelector";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useRecoilValue(filteredTodosSelector);

  return (
    <div>
      <div className="sectionTitle">LISTA</div>

      {todos.length === 0 ? (
        <div className="empty">Nada por aqui.</div>
      ) : (
        <ul className="taskList">
          {todos.map((t) => (
            <TodoItem key={t.id} todo={t} />
          ))}
        </ul>
      )}
    </div>
  );
}
