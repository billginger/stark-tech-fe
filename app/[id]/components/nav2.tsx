'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  icon?: React.ReactElement;
  label?: string;
  href?: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

const Nav = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        orientation="vertical"
        value={value}
        // onChange={handleChange}
        role="navigation"
      >
        <LinkTab label="每月營收" href="#" />
        <LinkTab label="每股盈餘" href="#" />
        <LinkTab label="每股淨值" href="#" />
        <LinkTab label="損益表" href="#" />
        <LinkTab label="總資產" href="#" />
        <LinkTab label="負債和股東權益" href="#" />
        <LinkTab label="現金流量表" href="#" />
        <LinkTab label="股利政策" href="#" />
        <LinkTab label="電子書" href="#" />
      </Tabs>
    </Box>
  );
}

export default Nav;
