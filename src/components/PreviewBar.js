import React, {useContext} from 'react';
// import styled from 'styled-components';

import {TestDiv} from '../styled components/containers'
import {H1} from '../styled components/previewBar comps/Header';

//importing contexts
import {ThemeContext} from '../context/ThemeContext'


function PreviewBar(){
    const {backgroundColor, headerColor, headerSize} = useContext(ThemeContext)
    return(
        <TestDiv vwWidth="60vw" backgroundColor={backgroundColor} className="shadowed">
            <H1 fColor={headerColor} fSize={headerSize}>Learning Styled Components</H1>
        </TestDiv>
    )
}

export default PreviewBar;