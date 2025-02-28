import React from "react";
import {DataItem} from "./sampleData";
export const DataRow: React.FC<{ 
    item: DataItem; 
    isSelected: boolean; 
    onToggle: () => void 
  }> = ({ item, isSelected, onToggle }) => (
    <tr>
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