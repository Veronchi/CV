import { FC, SyntheticEvent, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paths } from '@/utils/constants';
import { Link } from 'react-router-dom';

interface LinkTabProps {
  label: string;
  to: string;
}

const { MAIN, PROJECTS } = Paths;

const LinkTab = (props: LinkTabProps) => <Tab component={Link} {...props} />;

export const NavTabs: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="About Me" to={MAIN} />
        <LinkTab label="Projects" to={PROJECTS} />
      </Tabs>
    </Box>
  );
};
