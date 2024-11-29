import React from "react";

const DataTable = ({ rows, onDelete, onEdit }) => {
  return (
    <div class="parent-div">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>
                  <button onClick={() => onEdit(row)}>Edit</button>
                  <button onClick={() => onDelete(row.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
