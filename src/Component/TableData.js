import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(ID, Title, MeetingNumber, InnerParticipator, Location) {
  return { ID, Title, MeetingNumber, InnerParticipator, Location };
}

export default function TableData() {
  // const TableData = () => {
  const url = 'http://localhost:58148/api/Meeting/GetMeetingById/9';

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((json) => setData(json.data));
  }, []);
console.log(data);
  const rows = [
    createData('ID', data.Id, 657, 7567),
    createData('Titleeeeeeeeeeeeeeeeeeeeeee', [data.Title]),
    createData('MeetingNumber', [data.MeetingNumber]),
    createData('InnerParticipator', [data.InnerParticipator]),
    createData('Location', [data.Location]),
  ];
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align='right'>Title</StyledTableCell>
            <StyledTableCell align='right'>
              MeetingNumber&nbsp;(g)
            </StyledTableCell>
            <StyledTableCell align='right'>
              InnerParticipator&nbsp;(g)
            </StyledTableCell>
            <StyledTableCell align='right'>Location&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ID}>
              <StyledTableCell component='th' scope='row'>
                {row.ID}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.Title}</StyledTableCell>
              <StyledTableCell align='right'>
                {row.MeetingNumber}
              </StyledTableCell>
              <StyledTableCell align='right'>
                {row.InnerParticipator}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.Location}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

//   const renderTable = () => {
//     return data.map((user) => {
//       return (
//         <tr>
//           <td>{user.Id}</td>
//           <td>{user.Title}</td>
//           <td>{user.MeetingNumber}</td>
//           <td>{user.InnerParticipator}</td>
//           <td>{user.Location}</td>
//         </tr>
//       );
//     });
//   };
// //   const stylemeeting = {
//     color: 'white',
//     fontSize: '15px',
//     fontFamily: 'vazir',
//     border: '2px solid purple',
//   };
//   return (
//     <div>
//        <kbd style={stylemeeting}>ایجاد یک صورتجلسه</kbd>
//       <h1 id='title'>صورت جلسات</h1>
//       <table id='users'>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>MeetingNumber</th>
//             <th>InnerParticipator</th>
//             <th>Location</th>
//           </tr>

//         </thead>
//        <tbody> {renderTable()} </tbody>
//       </table>

//     </div>

//   );

// };

// export default TableData;

// ReactDOM.render(<TableData />, document.getElementById('root'));
