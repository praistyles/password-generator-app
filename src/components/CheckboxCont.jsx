import './CheckboxCont.css'

export function CheckboxCont() {
    return (
        <div className="checkbox-cont">
            
            <div className="checkboxes">
                <label>
                    <input type="checkbox" />
                   Include Uppercase Letters
                </label>
                <label>
                    <input type="checkbox" />
                    Include Lowercase Letters
                </label>
                <label>
                    <input type="checkbox" />
                    Include Numbers
                </label>
                <label>
                    <input type="checkbox" />
                    Include Symbols
                </label>
            </div>
        </div>
    );
}