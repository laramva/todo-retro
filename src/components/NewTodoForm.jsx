import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosAtom } from "../atoms/todosAtom";

const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export default function NewTodoForm() {
  const setTodos = useSetRecoilState(todosAtom);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  const add = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;

    setTodos((prev) => [
      { id: uid(), text: value, priority, completed: false },
      ...prev,
    ]);

    setText("");
    setPriority("medium");
  };

  return (
    <form onSubmit={add}>
      <div className="sectionTitle">NOVA TAREFA</div>

      <div className="row">
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite uma tarefa..."
        />

        <select
          className="select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">baixa</option>
          <option value="medium">média</option>
          <option value="high">alta</option>
        </select>

        <button className="btn btn--accent" type="submit">
          adicionar
        </button>
      </div>
    </form>
  );
}
