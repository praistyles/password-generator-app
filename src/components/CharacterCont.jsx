import './CharacterCont.css'

export function CharacterCont({ value, onChange }) {
  const percentage = ((value - 1) / 19) * 100

  return (
    <div className="character-cont">
      <div className="character-length">
        <h2>Character Length</h2>
        <span>{value}</span>
      </div>
      <input
        type="range"
        min="1"
        max="20"
        value={value}
        className="slider"
        aria-label="Password length"
        onChange={(event) => onChange(Number(event.target.value))}
        style={{
          background: `linear-gradient(90deg, var(--border) 0%, var(--border) ${percentage}%, rgba(255,255,255,0.15) ${percentage}%, rgba(255,255,255,0.15) 100%)`,
        }}
      />
    </div>
  )
}