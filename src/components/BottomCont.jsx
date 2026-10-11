import './BottomCont.css'
import { CharacterCont } from './CharacterCont'
import { CheckboxCont } from './CheckboxCont'
import { GenerateBtn } from './GenerateBtn'
import { StrengthCont } from './StrengthCont'

export function BottomCont({
  length,
  onChangeLength,
  options,
  onToggleOption,
  onGenerate,
  strength,
}) {
  return (
    <div className="bottom-cont">
      <CharacterCont value={length} onChange={onChangeLength} />
      <CheckboxCont options={options} onToggle={onToggleOption} />
      <StrengthCont strength={strength} />
      <GenerateBtn onGenerate={onGenerate} />
    </div>
  )
}
