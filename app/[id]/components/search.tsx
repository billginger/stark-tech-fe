'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
  options: string[];
}

const Search = ({ options }: Props) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Autocomplete
        autoSelect
        onChange={(event: any, newValue: string | null) => {
          const arrValue = newValue?.split(' ');
          const id = arrValue?.[0];
          router.push(`/${id}`);
          setOpen(true);
        }}
        options={options}
        renderInput={(params) => <TextField {...params} label="輸入台股代號，查看公司價值" />}
      />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default Search;
