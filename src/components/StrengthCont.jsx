import './StrengthCont.css'

export function StrengthCont({ strength }) {
  return (
    <div className="strength-cont">
      <div className="strength-label">
        <h2>Strength</h2>
      </div>
      <div className="strength-display">
        <span className="strength-value">{strength.label}</span>
        <div className="strength-bars" aria-label={`Password strength: ${strength.label}`}>
          {[0, 1, 2, 3].map((index) => (
            <span
              key={index}
              className={`bar ${strength.bars[index] ? 'active' : ''}`}
              style={
                strength.bars[index]
                  ? {
                      backgroundColor: strength.color,
                      borderColor: strength.color,
                      boxShadow: `0 0 12px ${strength.color}`,
                    }
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}