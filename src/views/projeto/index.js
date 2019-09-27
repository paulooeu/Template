import React,{ useEffect, useState } from 'react';
import {CardGroup} from 'reactstrap';
import Widget from '../../components/Widget';
import Api from '../../servers/api'
import Zurich from '../../components/zurich'


// import { Container } from './styles';


export default function Projeto() {
  const [projetos, setProjetos] = useState([]);


  useEffect(() => {
    async function loadProjeto() {
      const {data} = await Api.get("projects");

     setProjetos(data);
    }
   loadProjeto();
  }, []);

  return (
    <>
     <div className="animated fadeIn">
<Zurich/>

    <CardGroup className="mb-4">

        <Widget projetos={projetos}/>


    </CardGroup>
    </div>
    </>
  );
}
