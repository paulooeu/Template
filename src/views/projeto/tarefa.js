import React, { useState, useEffect } from 'react';
import { startOfDay, endOfDay, parseISO } from 'date-fns';
import moment from 'moment'
import QueueAnim from 'rc-queue-anim';
import Api from '../../servers/api';
import Dashbord from '../../components/Dashboard';
import Grafico from '../../components/Grafico';


export default function Tarefa({ history, match }) {
  const [tarefas, setTarefa] = useState([]);
  

  const [state, setState] = useState({
    pontoConcluido:0,
    pontoTotal:0,
    horaConcluida:0,
    horaTotal:0,
    horaTotal2:0,
    minutoConcluida:0,
    minutoTotal:0,
  });


  useEffect(() => {
    async function loadData() {
      const { id } = match.params;
      const {issues} = await Api.jsonp(
        `http://sistemas.gerinf.uneb.br/issues.json?project_id=${id}&status_id=*`
      );

      let pontos =0
      let pontosConcluido =0
      let horas=0
      let horaConcluida =0
      let hora=0
     issues.map(tarefa=>{
       Api.jsonp(
          `http://sistemas.gerinf.uneb.br/issues/${tarefa.id}.json`
        ).then(function(response){

        if(response.issue.tracker.name === 'História do Usuário'){
          pontos += parseInt(response.issue.custom_fields?response.issue.custom_fields.find(c=>(c.name==="Story Point")).value:0)

       let tempo = response.issue.total_spent_hours.toString().split('.')
            hora = parseFloat(tempo[0]+'.'+(tempo[1]*60).toString().substr(0,2))

           horas += hora

        if(response.issue.status.name === "Concluído"){
          pontosConcluido+=parseInt(response.issue.custom_fields?response.issue.custom_fields.find(c=>(c.name==="Story Point")).value:0)

          let tempo = response.issue.total_spent_hours.toString().split('.')
          hora = tempo[0]+'.'+(tempo[1]*60).toString().substr(0,2)

          horas +=  parseFloat(hora)
          horaConcluida +=parseFloat(hora)
        }
      }
      setState({
        pontoTotal:pontos,
        pontoConcluido:pontosConcluido,
        horaTotal:horas,
        horaConcluida:horaConcluida
      })
        },function onRejected(){
          console.log("erro")
        })
      })
      setTarefa(issues);
    }
    loadData();
  }, []);


  return (
    <>
    {/* {state.pontoTotal}- {state.horaTotal}-{state.horaTotal2}
      <QueueAnim>
        {tarefas.map(tarefa => (
          <div key={tarefa.id}>{tarefa.description}</div>
        ))}
      </QueueAnim> */}
      <Dashbord projeto={state} tarefas={tarefas} />
      <Grafico />
    </>
  );
}
