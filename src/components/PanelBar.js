import React, {useContext} from 'react';
// import styled from 'styled-components';

import {TestDiv} from '../styled components/containers'

//importing contexts
import {ThemeContext} from '../context/ThemeContext'


function PanelBar(){
    const {changeBackgroundColor, changeHeaderColor, changeHeaderSize} = useContext(ThemeContext)
    return(
        <TestDiv vwWidth="20vw">
            <fieldset style={{display:"flex",justifyContent:"center"}}>
                <legend style={{color:"#BB86FC"}}>Background Color:</legend>
                <input type="color" defaultValue="#121212" onChange={changeBackgroundColor}/>
            </fieldset>
            <fieldset style={{display:"flex",justifyContent:"center", flexDirection:"column"}}>
                <legend style={{color:"#BB86FC"}}>Header:</legend>
                <div>
                    <label htmlFor="fColor" style={{color:"#03DAC6", marginRight:"10px"}}>Text Color</label>
                    <input type="color" defaultValue="#FFFFFF" onChange={changeHeaderColor} id="fcolor" tabIndex="1"/> 
                </div>
                <div>
                    <label htmlFor="fSize" style={{color:"#03DAC6", marginRight:"10px"}}>Text Size</label>
                    <input type="range" min="16" max="240" value="64" class="slider" id="fSize" tabIndex="2" onChange={changeHeaderSize}/>
                </div>
            </fieldset>
        </TestDiv>
    )
}

export default PanelBar;