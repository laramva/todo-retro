export default function ConfirmPopup({ open, title, message, onClose }) {
  if (!open) return null;

  return (
    <div className="popupOverlay" onMouseDown={onClose}>
      <div
        className="popupWindow"
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="popupBar">
          <div className="popupTitle">{title}</div>
          <button className="popupX" onClick={onClose} aria-label="Fechar">
            ✕
          </button>
        </div>

        <div className="popupBody">
          <div className="popupMsg">{message}</div>

          <div className="popupActions">
            <button className="btn btn--accent" onClick={onClose}>
              ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
