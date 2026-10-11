import './PasswordCont.css'
import copyIcon from '../assets/icon-copy.svg'

export function PasswordCont({ password, onCopy, copied }) {
  return (
    <div className="password-cont">
      <h1 className="password">{password || 'P4$5W0rD!'}</h1>
      <button type="button" className="copy-button" onClick={onCopy} aria-label="Copy password">
        <span className="copy-status">{copied ? 'Copied' : 'Copy'}</span>
        <img className="copy-btn" src={copyIcon} alt="Copy password" />
      </button>
    </div>
  )
}
