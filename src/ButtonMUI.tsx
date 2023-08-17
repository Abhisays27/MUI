import React from 'react'
import {Button,Checkbox} from "@mui/material"

import { pink } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Buttonmui = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>

<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success" onClick={() => {
    alert('clicked');
  }}>
  Success
</Button>
<Button variant="outlined" color="error">
  Error
</Button>

<Checkbox {...label} defaultChecked />
<Checkbox {...label} defaultChecked color="secondary" />
<Checkbox {...label} defaultChecked color="success" />
<Checkbox {...label} defaultChecked color="default" />
<Checkbox
  {...label}
  defaultChecked
  sx={{
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },
  }}
/>


    </div>
  )
}

export default Buttonmui
