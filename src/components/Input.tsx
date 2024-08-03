import React from 'react';

interface InputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <span>$</span>
      <input
        type="number"
        value={value || ''}
        onChange={onChange}
        min="0"
        step="0.01"
        placeholder='0'
      />
    </div>
  );
};

export default Input;
