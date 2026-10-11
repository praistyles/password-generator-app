import './CheckboxCont.css'

const checkboxOptions = [
  { key: 'uppercase', label: 'Include Uppercase Letters' },
  { key: 'lowercase', label: 'Include Lowercase Letters' },
  { key: 'numbers', label: 'Include Numbers' },
  { key: 'symbols', label: 'Include Symbols' },
]

export function CheckboxCont({ options, onToggle }) {
  return (
    <div className="checkbox-cont">
      <div className="checkboxes">
        {checkboxOptions.map(({ key, label }) => (
          <label key={key} className="checkbox-label">
            <input
              type="checkbox"
              checked={options[key]}
              onChange={() => onToggle(key)}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}