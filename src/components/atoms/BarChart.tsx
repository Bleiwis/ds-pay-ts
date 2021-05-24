import {
  Box,
  makeStyles,
  useTheme,
  fade,
} from '@material-ui/core'
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import iBar from '../../interfaces/iBarChart';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  },
  box: {
    margin: 10
  }
}));

interface iData {
  dataProp: iBar[];
}

const BarChart = ({ dataProp }: iData) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        label: dataProp[0].aproved.label,
        backgroundColor: theme.palette.primary.main,
        data: dataProp[0].aproved.data,
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5
      },
      {
        label: dataProp[0].refused.label,
        backgroundColor: theme.palette.error.main,
        data: dataProp[0].refused.data,
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5
      },
      {
        label: dataProp[0].waiting.label,
        backgroundColor: fade(theme.palette.primary.main, 0.50),
        data: dataProp[0].waiting.data,
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5
      },
    ],
    labels: dataProp[0].date
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cornerRadius: 20,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0,
            maxTicksLimit: 5,
            callback: (value: any) => (value > 0 ? `${value}` : value)
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 20,
      xPadding: 20,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.background.default,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
    }
  };

  return (
    <Box
      minWidth={280}
      className={classes.box}
    >
      <div className={classes.root}>
        <Bar data={data} options={options} />
      </div>
    </Box>
  )
}

BarChart.propTypes = {
  dataProp: PropTypes.object
}


export default BarChart
