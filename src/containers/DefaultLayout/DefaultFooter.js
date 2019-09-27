import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logoUneb from '../../assets/img/uneb/uneb_logo.svg'
import logoGoverno from '../../assets/img/uneb/logo_gov_bahia3.svg'
import {Container} from './styles'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <>
        <Container>
         GERENCIAMENTO ÁGIL DE PROJETOS <img src={logoUneb} /> | GERINF - 2019  &copy; <img src={logoGoverno} />
     </Container>

      </>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
