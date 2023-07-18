import { Card, CardContent, Grid } from '@mui/material'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
)

export const doughnutData = {
  labels: ['Subscriptions', 'Mortgage', 'Food', 'Transport', 'Misc', 'Leisure'],
  datasets: [
    {
      label: 'Expenses by category',
      data: [12000, 19000, 3000, 5000, 2000, 3000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

// vertical bar chart

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthly Income and Expense',
    },
  },
}

const labels2 = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const data2 = {
  labels: labels2,
  datasets: [
    {
      label: 'Income',
      data: labels2.map(() => Math.floor(Math.random() * 250000)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Expense',
      data: labels2.map(() => Math.floor(Math.random() * 250000)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

const DashboardOverview = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{}}>
            <CardContent>
              Total Transactions: <hr />
              ETB 745,000.00 <br />
              USD 3,700.00
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{}}>
            <CardContent>
              Income: <hr />
              ETB 845,000.00 <br />
              USD 4,100.00
            </CardContent>
          </Card>
        </Grid>{' '}
        <Grid item xs={12} md={4}>
          <Card sx={{}}>
            <CardContent>
              Expense: <hr />
              ETB -545,000.00 <br />
              USD -2700.00
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: '100%',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Doughnut data={doughnutData} />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: '100%',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Bar options={options2} data={data2} />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default DashboardOverview
