import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const SystemAdmin = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box
        sx={{ width: '100%', bgcolor: 'background.paper', minHeight: '600px' }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label='Tab 1' />
          <Tab label='Tab 2' />
          <Tab label='Tab 3' />
        </Tabs>

        <TabPanel value={value} index={0}>
          tab1
        </TabPanel>
        <TabPanel value={value} index={1}>
          tab2
        </TabPanel>
        <TabPanel value={value} index={2}>
          tab3
        </TabPanel>
      </Box>
    </>
  )
}

export default SystemAdmin
