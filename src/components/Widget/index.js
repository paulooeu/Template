import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import {Link} from 'react-router-dom'
import Widget04 from './item';

export default function Widgets({projetos}){
  return(
      <>
        <Row>
          {projetos.map(projeto=>(
            <Col key={projeto.id}>

                 <Link key={projeto} to={`/tarefa/${projeto.id}`} >
            <Widget04  icon="icon-pie-chart" color={'success'} header={projeto.name} value="50">{projeto.description}</Widget04>
            </Link>
          </Col>
          ))}
        </Row>
        </>
  )
}

