import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'
import ManageBudgetSubtab from './ManageBudgetSubtab'

const years = [2021, 2022, 2023, 2024]

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

const ManageBudgets = () => {
  const [value, setValue] = useState(years.indexOf(2023))

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box
        sx={{ width: '100%', bgcolor: 'background.paper', minHeight: '600px' }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          {years.map((year) => (
            <Tab label={year} key={year} disabled={year !== 2023} />
          ))}
        </Tabs>

        {years.map((year, index) => (
          <TabPanel value={value} index={index} key={year}>
            <ManageBudgetSubtab />
          </TabPanel>
        ))}
      </Box>
    </>
  )
}

export default ManageBudgets
