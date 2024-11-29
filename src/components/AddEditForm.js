import React, { useState, useEffect } from 'react';

const AddEditForm = ({ onSave, currentRow }) => {
  const [formData, setFormData] = useState({ name: '', age: '' });

  useEffect(() => {
    if (currentRow) {
      setFormData(currentRow); // Populate form with the row being edited
    } else {
      setFormData({ name: '', age: '' });
    }
  }, [currentRow]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age) {
      alert('Please fill in all fields!');
      return;
    }
    onSave(formData);
    setFormData({ name: '', age: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <button type="submit">{currentRow ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default AddEditForm;
