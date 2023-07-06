/* eslint-disable max-len */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './App.scss';

import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import usersFromServer from './api/users';

function getCategoryById(categoryId) {
  return categoriesFromServer.find(category => category.id === categoryId);
}

function getOwnerById(ownerId) {
  return usersFromServer.find(user => user.id === ownerId);
}

export const products = productsFromServer.map((product) => {
  const category = getCategoryById(product.categoryId);
  const user = getOwnerById(category.ownerId);

  return {
    ...product,
    category: category || undefined,
    user: user || undefined,
  };
});

function getPreparedProducts(productArray, { textValue, filteredField, filteredGroceryField }) {
  let preparedProducts = [...productArray];

  if (textValue) {
    preparedProducts = preparedProducts.filter(chosenProduct => chosenProduct.name.toLowerCase().includes(textValue.toLowerCase().trim()));
  }

  if (filteredField) {
    preparedProducts = preparedProducts.filter(chosenProduct => chosenProduct.user.name === filteredField);
  }

  if (filteredGroceryField) {
    preparedProducts = preparedProducts.filter(chosenProduct => chosenProduct.category.title === filteredGroceryField);
  }

  return preparedProducts;
}

export const App = () => {
  const [textValue, setTextValue] = useState('');
  const [filteredField, setFilteredField] = useState('');
  const [filteredGroceryField, setFilteredGroceryField] = useState('');

  const visibleProducts = getPreparedProducts(products, { textValue, filteredField, filteredGroceryField });

  function handReset() {
    setTextValue('');
    setFilteredField('');
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <p className="panel-tabs has-text-weight-bold">
              <a
                data-cy="FilterAllUsers"
                href="#/"
                onClick={() => setFilteredField('')}
                className={filteredField === '' && 'is-active'}
              >
                All
              </a>

              {usersFromServer.map((user) => {
                const userName = user.name;

                return (
                  <a
                    key={user.id}
                    data-cy="FilterUser"
                    href="#/"
                    onClick={() => setFilteredField(userName)}
                    className={filteredField === user.name && 'is-active'}
                  >
                    {user.name}
                  </a>
                );
              })}
            </p>

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                  onChange={event => setTextValue(event.target.value)}
                  value={textValue}
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                {textValue && (
                  <span className="icon is-right">
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <button
                      data-cy="ClearButton"
                      type="button"
                      className="delete"
                      onClick={() => setTextValue('')}
                    />
                  </span>
                )}
              </p>
            </div>

            <div className="panel-block is-flex-wrap-wrap">
              <a
                href="#/"
                data-cy="AllCategories"
                className={`button is-success mr-6 ${filteredGroceryField && 'is-outlined'}`}
                onClick={() => setFilteredGroceryField('')}
              >
                All
              </a>

              {categoriesFromServer.map((category) => {
                const categoryTitle = category.title;

                return (
                  <a
                    key={category.id}
                    data-cy="Category"
                    className={`button mr-2 my-1 ${filteredGroceryField === category.title && 'is-info'}`}
                    href="#/"
                    onClick={() => setFilteredGroceryField(categoryTitle)}
                  >
                    {category.title}
                  </a>
                );
              })}
            </div>

            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
                onClick={handReset}
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>

        <div className="box table-container">
          {visibleProducts.length === 0 ? (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          ) : (
            <table
              data-cy="ProductTable"
              className="table is-striped is-narrow is-fullwidth"
            >
              <thead>
                <tr>
                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      ID

                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort" />
                        </span>
                      </a>
                    </span>
                  </th>

                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      Product

                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort-down" />
                        </span>
                      </a>
                    </span>
                  </th>

                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      Category

                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort-up" />
                        </span>
                      </a>
                    </span>
                  </th>

                  <th>
                    <span className="is-flex is-flex-wrap-nowrap">
                      User

                      <a href="#/">
                        <span className="icon">
                          <i data-cy="SortIcon" className="fas fa-sort" />
                        </span>
                      </a>
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {visibleProducts.map(product => (
                  <tr
                    data-cy="Product"
                    key={product.id}
                  >
                    <td className="has-text-weight-bold" data-cy="ProductId">
                      {product.id}
                    </td>

                    <td data-cy="ProductName">
                      {product.name}
                    </td>
                    <td data-cy="ProductCategory">
                      {`${product.category.icon} - ${product.category.title}`}
                    </td>

                    <td
                      data-cy="ProductUser"
                      className={product.user.sex === 'f' ? 'has-text-danger' : 'has-text-link'}
                    >
                      {product.user.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
