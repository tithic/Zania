import React, { useState, useRef, useEffect } from "react";

export const SelectAllCheckbox: React.FC<{ 
  selectedCount: number, 
  totalCount: number, 
  onToggle: () => void 
}> = ({ selectedCount, totalCount, onToggle }) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = selectedCount > 0 && selectedCount < totalCount;
    }
  }, [selectedCount, totalCount]);

  return (
    <label>
      <input 
        type="checkbox" 
        ref={checkboxRef}
        checked={selectedCount === totalCount} 
        onChange={onToggle} 
      />
      {selectedCount ? `${selectedCount} Selected` : "None Selected"}
    </label>
  );
};



