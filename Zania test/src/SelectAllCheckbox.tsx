import React, {  useRef, useEffect } from "react";

 const SelectAllCheckbox: React.FC<{ 
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
   <>
      <input 
        type="checkbox" 
        ref={checkboxRef}
        checked={selectedCount === totalCount} 
        onChange={onToggle} 
      />
      {selectedCount ? `${selectedCount} Selected` : "None Selected"}
    </>
  );
};

export default SelectAllCheckbox;


