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
  const [value, setValue] = React.useState(2);

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
        <LinkTab icon={<div>B</div>} label="最新動態" href="#" />
        <LinkTab icon={<div>F</div>} label="股票健診" href="#" />
        <LinkTab icon={<div>C</div>} label="財務報表" href="#" />
        <LinkTab icon={<div className="text-[#CA0813]">D</div>} label="獲利能力" href="#" />
        <LinkTab icon={<div className="text-[#198420]">E</div>} label="安全性分析" href="#" />
        <LinkTab icon={<div className="text-[#E67820]">q</div>} label="成長力分析" href="#" />
        <LinkTab icon={<div className="text-[#345BA7]">J</div>} label="價值評估" href="#" />
        <LinkTab icon={<div>G</div>} label="董監與籌碼" href="#" />
        <LinkTab icon={<div className="text-[#743079]">H</div>} label="關鍵指標" href="#" />
        <LinkTab icon={<div className="text-[#526fd7]">I</div>} label="產品組合" href="#" />
      </Tabs>
    </Box>
  );
}

export default Nav;
