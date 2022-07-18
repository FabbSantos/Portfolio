import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';


ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  
  export const data = {
    labels: ['SUMMARY','HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
    datasets: [
      {
        label: 'SKILLS',
        data: [0, 10, 10, 8, 6],
        backgroundColor: 'rgba(231, 29, 115, 0.5)',
        borderColor: 'rgba(129, 45, 127, 1)',
        borderWidth: 1,
      },
    ],
  };
  

const Skills: React.FC = () => {
    return (
        <Radar data={data} />
    )

}

export default Skills;
