import { StyledCalculate } from "./styled/Calculate.styled"

const Calculate = () => {
  return (
    <StyledCalculate>
        <div className="calculated-tip">
            <div className="result-tip-label">
                <h3>Tip Amount</h3>
                <span>/ person</span>
            </div>
            <p className="result">$<span id="result-tip">0.00</span></p>
        </div>

        <div className="calculated-total">
            <div className="result-total-label">
                <h3>Total</h3>
                <span>/ person</span>
            </div>
            <p className="result">$<span id="result-total">0.00</span></p>
        </div>

        <button id="reset">Reset</button>

    </StyledCalculate>
  )
}

export default Calculate