import React from 'react';
//import PropTypes from 'prop-types';
import { Input, Menu } from 'semantic-ui-react'

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
    //handleItemClick = (e, { name }) => {
  //  this.setState({ activeItem: name });
    //setFilter(name);
  //};
    //return (
      <Menu secondary>
        <Menu.Item
          active={filterBy === 'all'}
          onClick={setFilter.bind(this, 'all')}>
          All
        </Menu.Item>
        <Menu.Item
          active={filterBy === 'price_high'}
          onClick={setFilter.bind(this, 'price_high')}
        >
          Price(hight)
          </Menu.Item>
        <Menu.Item
          active={filterBy === 'price_low'}
          onClick={setFilter.bind(this,'price_low')}
        >Price(low)
        </Menu.Item>
        <Menu.Item
          active={filterBy === 'author'}
          onClick={setFilter.bind(this,'author')}
        >Author
        </Menu.Item>
        <Menu.Item>
          <Input icon="search"
          onChange={e=>setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Input query..." />
        </Menu.Item>
      </Menu>
    );

export default Filter;
