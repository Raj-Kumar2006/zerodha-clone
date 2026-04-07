import { Bar } from 'react-chartjs-2';

export function VerticalGraph({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Bar options={options} data={data} />;
}