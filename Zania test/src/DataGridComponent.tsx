import React, { useState, useRef, useEffect } from "react";
import {sampleData} from "./sampleData";
import {SelectAllCheckbox} from "./SelectAllCheckbox";
import {DataRow} from "./DataRow";
const DataGrid: React.FC = () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
  
    const handleRowSelection = (name: string) => {
      setSelectedRows(prev =>
        prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
      );
    };
  
    const handleSelectAllToggle = () => {
      if (selectedRows.length === sampleData.length) {
        setSelectedRows([]);
      } else {
        setSelectedRows(sampleData.map(item => item.name));
      }
    };
 
  
    const handleDownload = () => {
      const downloadedItems = sampleData
        .filter(item => selectedRows.includes(item.name))
        .map(item => `Name: ${item.name} Device: ${item.device} Path: ${item.path}`)
        .join("\n");
  
      alert(`Downloaded Items\n${downloadedItems}`);
    };
  
    return (
      <div>
        <h2>Datagrid</h2>
        <SelectAllCheckbox 
          selectedCount={selectedRows.length} 
          totalCount={sampleData.length} 
          onToggle={handleSelectAllToggle} 
        />
        <table border={1} cellPadding={5} style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Checkbox</th>
              <th>Device</th>
              <th>Path</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map(item => (
              <DataRow 
                key={item.name} 
                item={item} 
                isSelected={selectedRows.includes(item.name)} 
                onToggle={() => handleRowSelection(item.name)} 
              />
            ))}
          </tbody>
        </table>
        <button onClick={handleDownload} disabled={selectedRows.length < sampleData.length}>
          Download Selected
        </button>
      </div>
    );
  };
  export default DataGrid;