import React, { useState } from 'react';
import AddEditForm from './components/AddEditForm';
import DataTable from './components/DataTable';
import './App.css';


const App = () => {
  const [rows, setRows] = useState([]);
  const [currentRow, setCurrentRow] = useState(null); 

  const handleSave = (row) => {
    if (row.id) {
      setRows(rows.map((r) => (r.id === row.id ? row : r)));
    } else {
      setRows([...rows, { ...row, id: Date.now() }]);
    }
    setCurrentRow(null);
  };

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleEdit = (row) => {
    setCurrentRow(row);
  };

  return (
    <div className="app-container">
      <h1>React CRUD App</h1>
      <AddEditForm onSave={handleSave} currentRow={currentRow} />
      <DataTable rows={rows} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
