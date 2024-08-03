import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import Input from '../components/Input';
import {
  setBill,
  setTipPercentage,
  setNumPeople,
  selectBill,
  selectNumPeople,
} from '../store/counterSlice';

const MainCoun: React.FC = () => {
  const dispatch = useDispatch();
  const bill = useSelector(selectBill);
  const numPeople = useSelector(selectNumPeople);

  return (
    <div className="mainCoun-container">
      <div className="input-coun">
        <span>Bill</span>
        <Input value={bill} onChange={(e) => dispatch(setBill(parseFloat(e.target.value) || 0))} />
      </div>
      <div className="btn-select">
        <span>Select Tip %</span>
        <div className="btn-container">
          {[5, 10, 15, 25, 50].map((percentage, index) => (
            <button key={index} className="btn" onClick={() => dispatch(setTipPercentage(percentage))}>
              {percentage}%
            </button>
          ))}
          <input
            type="number"
            className="btn-result btn"
            placeholder="CUSTOM"
            onChange={(e) => dispatch(setTipPercentage(parseFloat(e.target.value) || 0))}
          />
        </div>
      </div>
      <div className="input-coun">
        <span>Number of People</span>
        <div className="input-container">
          <FaUser className="icon" />
          <input
            type="number"
            className="result-input"
            value={numPeople}
            onChange={(e) => dispatch(setNumPeople(parseInt(e.target.value) || 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default MainCoun;
