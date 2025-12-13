import { useSetRecoilState } from "recoil";
import { todosAtom } from "../atoms/todosAtom";

const labelPriority = (p) => {
  if (p === "low") return "prioridade: baixa";
  if (p === "high") return "prioridade: alta";
  return "prioridade: média";
};

export default function TodoItem({ todo }) {
  const setTodos = useSetRecoilState(todosAtom);

  const toggleDone = () => {
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t))
    );
  };

  const remove = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <li className="task">
      <div className="task__left">
        <input
          className="task__check"
          type="checkbox"
          checked={todo.completed}
          onChange={toggleDone}
          aria-label="Concluir tarefa"
        />

        <div>
          <p className={`task__title ${todo.completed ? "task__title--done" : ""}`}>
            {todo.text}
          </p>

          <div className="badge" title="prioridade">
            <span className="badgeDot" />
            <span>{labelPriority(todo.priority)}</span>
          </div>
        </div>
      </div>

      <div className="task__actions">
        <button className="iconBtn" type="button" onClick={remove} aria-label="Remover tarefa" title="Remover">
          ×
        </button>
      </div>
    </li>
  );
}
