'use client';

import { Dispatch, SetStateAction } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  interval: string;
  setInterval: Dispatch<SetStateAction<string>>;
}

const Menu = ({ interval, setInterval }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    setInterval(event.target.value);
  };

  return (
    <Select
      value={interval}
      onChange={handleChange}
      displayEmpty
    >
      <MenuItem value={36}>近 3 年</MenuItem>
      <MenuItem value={60}>近 5 年</MenuItem>
      <MenuItem value={96}>近 8 年</MenuItem>
    </Select>
  );
};

export default Menu;
