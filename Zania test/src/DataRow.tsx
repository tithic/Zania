import React from "react";
import {DataItem} from "./sampleData";
const DataRow: React.FC<{ 
    item: DataItem; 
    isSelected: boolean; 
    onToggle: () => void 
  }> = ({ item, isSelected, onToggle }) => (
    <tr style={{ borderBottom: "1px solid black"}}>
      <td>
        <input type="checkbox" checked={isSelected} onChange={onToggle} />
      </td>
      <td>{item.name}</td>
      <td>{item.device}</td>
      <td>{item.path}</td>
      <td>
        {item.status === "available" && <span style={{ color: "green" }}>●</span>} {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
      </td>
    </tr>
  );

  export default DataRow