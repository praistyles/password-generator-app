import './BottomCont.css'
import { CharacterCont } from './CharacterCont'
import { StrengthCont } from './StrengthCont'
import { GenerateBtn } from './GenerateBtn'
import { CheckboxCont } from './CheckboxCont'



export function BottomCont() {
  return (
    <div className="bottom-cont">

      <CharacterCont />
      <CheckboxCont />
      <StrengthCont />
      <GenerateBtn />
      
    </div>
  );
}   
