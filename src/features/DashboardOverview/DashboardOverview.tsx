import { useDashboardStatQuery } from '@lib/graphql/generated/graphql'
import { Card, CardContent, Grid } from '@mui/material'
import { generateRandomColorCode } from '@utils/randomUtils'
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
    },
    {
      label: 'Expenses by category',
      data: [12000, 19000, 3000, 5000, 2000, 3000],
      // backgroundColor: [
      //   'rgba(255, 99, 132, 0.2)',
      //   'rgba(54, 162, 235, 0.2)',
      //   'rgba(255, 206, 86, 0.2)',
      //   'rgba(75, 192, 192, 0.2)',
      //   'rgba(153, 102, 255, 0.2)',
      //   'rgba(255, 159, 64, 0.2)',
      // ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      // ],
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
  const dashboardStatQuery = useDashboardStatQuery()

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{}}>
            <CardContent>
              Total Transactions: <hr />
              {dashboardStatQuery?.data?.dashboardStat?.totals.map((item) => (
                <>
                  {item?.currencyCode} {item?.totalAmount?.toLocaleString()}{' '}
                  <br />
                </>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{}}>
            <CardContent>
              Income: <hr />
              {dashboardStatQuery?.data?.dashboardStat?.totals.map((item) => (
                <>
                  {item?.currencyCode} {item?.incomeAmount?.toLocaleString()}{' '}
                  <br />
                </>
              ))}
            </CardContent>
          </Card>
        </Grid>{' '}
        <Grid item xs={12} md={4}>
          <Card sx={{}}>
            <CardContent>
              Expense: <hr />
              {dashboardStatQuery?.data?.dashboardStat?.totals.map((item) => (
                <>
                  {item?.currencyCode} {item?.expenseAmount?.toLocaleString()}{' '}
                  <br />
                </>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        {dashboardStatQuery.data?.dashboardStat?.currencies?.map((cur) => (
          <Grid key={cur?.currencyCode} item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {dashboardStatQuery.data && (
                <Doughnut
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        display: (cur?.expenseByCategory.length ?? 0) < 7,
                        // position: 'center',
                      },
                      title: {
                        display: true,
                        text: 'Monthly Income and Expense',
                      },
                    },
                  }}
                  data={{
                    // ...doughnutData,
                    labels: Array.from(
                      new Set([
                        ...(cur?.expenseByCategory?.map(
                          (c) => c?.categoryName
                        ) ?? []),
                        ...(cur?.incomeByCategory?.map(
                          (c) => c?.categoryName
                        ) ?? []),
                      ])
                    ),
                    datasets: [
                      {
                        label: cur?.currencyCode,
                        data: cur?.expenseByCategory?.map((c) => c?.amount),
                        backgroundColor: cur?.expenseByCategory?.map(
                          (c) => `${generateRandomColorCode()}ee`
                        ),
                      },
                      {
                        label: cur?.currencyCode,
                        data: cur?.incomeByCategory?.map((c) => c?.amount),
                        backgroundColor: cur?.incomeByCategory?.map(
                          (c) => `${generateRandomColorCode()}ee`
                        ),
                      },
                    ],
                  }}
                />
              )}
            </Card>
          </Grid>
        ))}
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
