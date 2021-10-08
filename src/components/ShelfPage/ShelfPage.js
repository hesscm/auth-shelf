import React from 'react';
import ShelfList from './ShelfList';
import ItemForm from '../ItemForm/ItemForm';

function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfList />
      <ItemForm />
    </div>
  );
}

export default ShelfPage;
