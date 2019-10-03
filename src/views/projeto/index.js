import React, { useEffect, useState } from "react";
import { CardGroup } from "reactstrap";


import Widget from "../../components/Widget";
import Api from "../../servers/api";
import Animacao from "../../components/animacaoCadeia";
import axios from 'axios-jsonp-pro'

// import { Container } from './styles';

export default function Projeto() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    async function loadProjeto() {
    const {projects}=await Api.jsonp('http://sistemas.gerinf.uneb.br/projects.json')

    //  const { data } = await Api.jsonp("projects");

      setProjetos(projects);
    }
    loadProjeto();
  }, [projetos]);

  return (
    <>
      {/* <Animacao projetos={projetos}>sss</Animacao> */}
      <div className="animated fadeIn">

    <CardGroup className="mb-4">

        <Widget projetos={projetos}/>

    </CardGroup>

      </div>
    </>
  );
}
