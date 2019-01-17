import React, {Component} from "react";
import styled, { keyframes } from "styled-components";


export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const {match: {params}} = this.props;
    console.log('test mounted');
    console.log( this.props );
    console.log( this.props.match.params );
  }


  render() {
    return(
      <div id="balls" style={{display:"flex", justifyContent: "space-evenly", border: "1px solid pink", width: "100%"}}>
        <AniBox del="0s"/>
        <AniBox del="1s"/>
        <AniBox del="2s"/>
        <AniBox del="3s"/>
      </div>
    );
  }
}



const morph = keyframes`
  0%   { border-radius: 0px }
  50% { border-radius: 50% }
  100% { border-radius: 0px }
`;

const spin = keyframes`
  from { transform: rotate(0deg) }
  to   { transform: rotate(360deg) }
`;

const AniBox = styled.div`
  width: 65px;
  height: 65px;
  background-image: linear-gradient(0deg, var(--ucado-orange) 0%, var(--ucado-green) 100%);
  animation: ${spin} 1s ease-in-out infinite, ${morph} 1s ease-in-out infinite;
  animation-delay: ${props => props.del};
  transition: 1s linear;

  &:hover {
    height: 150px;
    width: 150px;
  }
`;


