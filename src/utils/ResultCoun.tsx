import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/Button';
import { reset, selectBill, selectTipPercentage, selectNumPeople } from '../store/counterSlice';

const ResultCoun: React.FC = () => {
  const dispatch = useDispatch();
  const bill = useSelector(selectBill);
  const tipPercentage = useSelector(selectTipPercentage);
  const numPeople = useSelector(selectNumPeople);

  const calculateTip = () => (bill * (tipPercentage || 0)) / 100;
  const calculateTotal = () => bill + calculateTip();

  const tipAmount = numPeople > 0 ? calculateTip() / numPeople : 0;
  const total = numPeople > 0 ? calculateTotal() / numPeople : 0;

  return (
    <div className="resultCoun-container">
      <div className="result-main-container">
        <div className="result-container">
          <div className="text-container">
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          <div className="resultCouresult-input">${(tipAmount || 0).toFixed(2)}</div>
        </div>
        <div className="result-container">
          <div className="text-container">
            <p>Total</p>
            <span>/ person</span>
          </div>
          <div className="resultCouresult-input">${(total || 0).toFixed(2)}</div>
        </div>
      </div>
      <Button className="result-btn" text="RESET" onClick={() => dispatch(reset())} />
    </div>
  );
};

export default ResultCoun;
