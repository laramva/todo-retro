import { useRecoilState } from "recoil";
import { filterAtom } from "../atoms/filterAtom";

export default function TodoFilters() {
  const [filters, setFilters] = useRecoilState(filterAtom);

  const setStatus = (status) => setFilters((p) => ({ ...p, status }));
  const setPriority = (priority) => setFilters((p) => ({ ...p, priority }));

  return (
    <div className="filtersBlock">
      <div className="sectionTitle">STATUS</div>
      <div className="chipsRow">
        <button
          type="button"
          className={`chip ${filters.status === "all" ? "chip--active" : ""}`}
          onClick={() => setStatus("all")}
        >
          todas
        </button>

        <button
          type="button"
          className={`chip ${filters.status === "pending" ? "chip--active" : ""}`}
          onClick={() => setStatus("pending")}
        >
          pendentes
        </button>

        <button
          type="button"
          className={`chip ${filters.status === "completed" ? "chip--active" : ""}`}
          onClick={() => setStatus("completed")}
        >
          concluídas
        </button>
      </div>

      <div className="sectionTitle">PRIORIDADE</div>
      <div className="chipsRow">
        <button
          type="button"
          className={`chip ${filters.priority === "all" ? "chip--active" : ""}`}
          onClick={() => setPriority("all")}
        >
          todas
        </button>
        <button
          type="button"
          className={`chip ${filters.priority === "low" ? "chip--active" : ""}`}
          onClick={() => setPriority("low")}
        >
          baixa
        </button>
        <button
          type="button"
          className={`chip ${filters.priority === "medium" ? "chip--active" : ""}`}
          onClick={() => setPriority("medium")}
        >
          média
        </button>
        <button
          type="button"
          className={`chip ${filters.priority === "high" ? "chip--active" : ""}`}
          onClick={() => setPriority("high")}
        >
          alta
        </button>
      </div>
    </div>
  );
}
