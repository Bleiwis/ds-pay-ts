import { Box, useTheme } from '@material-ui/core';
import { Doughnut } from "react-chartjs-2";
import PropTypes from 'prop-types';
import iDoughnut from '../../interfaces/iDoughnutChart';


interface iData {
  dataProp: iDoughnut
};

const DoughnutChart = ({ dataProp }: iData) => {
  const theme = useTheme();

    const data: object = {
    datasets: [dataProp.data].map(((dataset) => ({
      ...dataset,
      borderWidth: 10,
      borderColor: theme.palette.background.paper,
      hoverBorderColor: theme.palette.background.paper,
    }))),
    labels: dataProp.labels
  };

const options: object = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  cutoutPercentage: 65,
  legend: {
    display: false
  },
  layout: {
    padding: 0
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
    callbacks: {
      label(tooltipItem: any, _data: any) {
        const label = _data.labels[tooltipItem.index];
        const value = _data.datasets[0].data[tooltipItem.index];
        return `${label}: ${value}%`;
      }
    }
  }
};

return (
  <Box p={3} position="relative" minHeight={320}>
    <Doughnut
      data={data}
      options={options}
    />
  </Box>
)
}
DoughnutChart.propTypes = {
  dataProp: PropTypes.object.isRequired
};


export default DoughnutChart
