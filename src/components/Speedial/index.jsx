import * as React from 'react';
import Box from '@mui/material/Box';
import PostModal from '../PostModal';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {

  function handleClick()
  {
    return (
      <PostModal />
    );
  }

  return (
    <Box sx={{ position: 'fixed', top:'67vh', left:'190vh', height: 200, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ bottom: '43vh', right: 16 }}
        icon={<SpeedDialIcon variant= 'outlined' sx={{ backgroundColor:'#096BDE'}} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}