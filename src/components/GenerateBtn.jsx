import './GenerateBtn.css'
import arrowIcon from '../assets/icon-arrow-right.svg'

export function GenerateBtn({ onGenerate }) {
  return (
    <div className="generate-btn">
      <button type="button" onClick={onGenerate}>
        <span>Generate</span>
        <img src={arrowIcon} alt="" aria-hidden="true" />
      </button>
    </div>
  )
}