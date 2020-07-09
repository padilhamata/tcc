import React from "react";
import { Pie, } from "react-chartjs-2";

let semana = {
  labels: ['Domingo',"Segunda","Terça",'Quarta','Quinta','Sexta','Sabado'],

  datasets: [
    {
      label: 'Semana',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#ffff00',
        '#696969',
      ],
  
      data: [65, 59, 80, 81, 56,70]
    }
  ]
}

let mes = {
    labels: ['Janeiro',"Fevereiro","Março",'abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  
    datasets: [
      {
        label: 'Mês',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4',
          '#ffff00',
          '#696969',
          '#238E23',
          '#000000',
          '#238E23',
          '#CD7F32',
          '#0000FF'
        ],
    
        data: [200, 211, 150, 300, 266,240]
      }
    ]
  }
  

function dashboard() {
  return (<>
  <h1>Dashboard </h1>
    <div style={{width:'50%'}}> 
    <Pie
          data={semana}
          options={{
            title:{
              display:true,
              text:'Vendas na Semana',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
<br/>
       
    </div>
    <div style={{width:'50%'}}> 
    <Pie
          data={mes}
          options={{
            title:{
              display:true,
              text:'Vendas no ano',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

       
    </div>
    </>
  );
}

export default dashboard;
