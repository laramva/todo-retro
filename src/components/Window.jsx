export default function Window({ title, className = "", children }) {
  return (
    <div className={`window ${className}`}>
      <div className="window__bar">
        <div className="window__title">{title}</div>
        <div className="window__controls">
          <div className="window__dot" />
          <div className="window__dot" />
          <div className="window__dot" />
        </div>
      </div>
      <div className="window__body">{children}</div>
    </div>
  );
}
