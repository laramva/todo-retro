import { useMemo } from "react";
import Window from "./components/Window";
import NewTodoForm from "./components/NewTodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

import logo from "./assets/icons/logo.png";

import desktopArt from "./assets/icons/desktop.png";
import livroArt from "./assets/icons/livro.png";
import poltronaArt from "./assets/icons/poltrona.png";

import calendarIcon from "./assets/icons/calendar.png";
import folderIcon from "./assets/icons/folder.png";
import reminderIcon from "./assets/icons/reminder.png";
import todoIcon from "./assets/icons/todo.png";

export default function App() {
  const floating = useMemo(
    () => [
      { src: calendarIcon, className: "floatingIcon floatingIcon--calendar", alt: "" },
      { src: folderIcon, className: "floatingIcon floatingIcon--folder", alt: "" },
      { src: reminderIcon, className: "floatingIcon floatingIcon--reminder", alt: "" },
      { src: todoIcon, className: "floatingIcon floatingIcon--todo", alt: "" },
    ],
    []
  );

  return (
    <div className="stage">
      <div className="desktop">
        <div className="brand">
          <img src={logo} alt="" />
        </div>

        <div className="floatingIcons" aria-hidden="true">
          {floating.map((it, idx) => (
            <img key={idx} src={it.src} className={it.className} alt={it.alt} />
          ))}
        </div>

        <Window title="TAREFAS" className="win--main">
          <NewTodoForm />
          <TodoFilters />
          <TodoList />

          <div className="mainFooterArt">
            <img src={desktopArt} alt="" />
          </div>
        </Window>

        <Window title="PAUSA" className="win--left">
          <div className="art">
            <img src={poltronaArt} alt="" />
          </div>
        </Window>

        <Window title="PLANNER" className="win--right">
          <div className="art">
            <img src={livroArt} alt="" />
          </div>
        </Window>
      </div>
    </div>
  );
}
