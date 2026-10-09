import './CharacterCont.css'

export function CharacterCont() {
  return (
    <div className="character-cont">
        <div className="character-length">
            <h2>Character Length</h2>
            <span>0</span>
      </div>
      <input type="range" min="1" max="20" value="10" className="slider" />
        
      
    </div>
  );
}