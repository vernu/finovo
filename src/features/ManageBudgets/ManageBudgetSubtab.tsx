import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'
import EnterBudgets from './EnterBudgets'

const tabs = ['Enter Budget', 'Compare with Actuals']

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

const ManageBudgetSubtab = () => {
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
          {tabs.map((tab) => (
            <Tab label={tab} key={tab} />
          ))}
        </Tabs>

        <TabPanel value={value} index={0}>
          <EnterBudgets />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>Compare!</div>
        </TabPanel>
      </Box>
    </>
  )
}

export default ManageBudgetSubtab
