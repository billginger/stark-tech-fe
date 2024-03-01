'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface Props {
  revenueData: [string, number][];
  growData: string[][];
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:first-child': {
    borderTop: '1px solid rgba(224, 224, 224, 1)',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledTableCell = styled(TableCell)(() => ({
  textAlign: 'right',
  '&:nth-of-type(n+2)': {
    borderLeft: '1px solid rgba(224, 224, 224, 1)',
  },
}));

const Detail = ({ revenueData, growData }: Props) => {
  const tableRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollLeft = tableRef.current.scrollWidth - tableRef.current.offsetWidth;
    }
  }, [revenueData]);

  return (
    <div className="flex">
      <div className="grow">
        <Table>
          <TableBody sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
            <StyledTableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>年度月份</TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>每月營收</TableCell>
            </StyledTableRow>
            <StyledTableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>單月營收年增率 (%)</TableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </div>
      <div ref={tableRef} className="w-[630px] overflow-x-scroll">
        <Table>
          <TableBody>
            <StyledTableRow>
              {revenueData.map(item => (
                <StyledTableCell key={item[0]} sx={{ fontWeight: 'bold' }}>
                  {item[0].slice(0, 7).replace('-', '')}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              {revenueData.map(item => (
                <StyledTableCell key={item[0]}>
                  {item[1].toString().replace(/\B(?=(?:\d{3})+\b)/g, ',')}
                </StyledTableCell>
              ))}
            </StyledTableRow>
            <StyledTableRow>
              {growData.map(item => (
                <StyledTableCell key={item[0]}>
                  {item[1]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Detail;
