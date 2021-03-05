import React, {useContext} from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';


//importing contexts
import {ThemeContext} from '../context/ThemeContext'

const PanelBarContainer = styled.div`
  margin-top:5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

function PanelBar(){
    const {changeBackgroundColor, changeHeaderColor, changeHeaderSize, headerSize, headerText, changeHeaderText} = useContext(ThemeContext)
    return(
        <PanelBarContainer>
            <fieldset style={{display:"flex",justifyContent:"center"}}>
                <legend style={{color:"#BB86FC"}}>Background Color:</legend>
                <input type="color" defaultValue="#121212" onChange={changeBackgroundColor} tabIndex="1"/>
            </fieldset>
            <fieldset style={{display:"flex",justifyContent:"center", flexDirection:"column"}}>
                <legend style={{color:"#BB86FC"}}>Title:</legend>
                <div>
                    <label htmlFor="fText" style={{color:"#03DAC6", marginRight:"10px"}}>Text</label>
                    <input type="text" value={headerText} onChange={changeHeaderText} id="fText" tabIndex="2"/> 
                </div>
                <div>
                    <label htmlFor="fColor" style={{color:"#03DAC6", marginRight:"10px"}}>Text Color</label>
                    <input type="color" defaultValue="#FFFFFF" onChange={changeHeaderColor} id="fcolor" tabIndex="3"/> 
                </div>
                <div>
                    <label htmlFor="fSize" style={{color:"#03DAC6", marginRight:"10px"}}>Text Size</label>
                    <input type="range" min="16" max="120" value={headerSize} className="slider" id="fSize" tabIndex="4" onChange={changeHeaderSize}/>
                </div>
            </fieldset>
        </PanelBarContainer>
    )
}

export default PanelBar;