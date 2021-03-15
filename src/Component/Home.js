/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header.js';
import TableData from './TableData';
import CustomizedTables from './CustomizedTables';
const styles = {
  color: 'white',
  fontSize: '15px',
  fontFamily: 'vazir',
  border: '2px solid purple',
};
// var perf = require('./TableData.js');
// var table = require('./CustomizedTables.js');
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className='text-center mt-5 '>
        <NavLink to='/CreateForm'>
          <kbd style={styles}>ایجاد یک صورتجلسه</kbd>
        </NavLink>
        {/* <iframe src={perf}></iframe> */}
        <TableData />
        <CustomizedTables/>
      </div>
    </div>
  );
};

export default Home;
