import React, {useContext, useRef} from 'react';
// import styled from 'styled-components';

import {PreviewBarContainer} from '../styled components/containers'
import {H1} from '../styled components/previewBar comps/Header';

//importing contexts
import {ThemeContext} from '../context/ThemeContext'

//importing dom-to-image
import domtoimage from 'dom-to-image';


function PreviewBar(){

    const handleGenerateImg = (e) => {
        e.preventDefault();
        domtoimage.toJpeg(previewBarRef.current, {quality:1, bgcolor: backgroundColor, height:396, width:1584})
          .then(function(dataUrl){
            var link = document.createElement('a');
            link.download = 'linkedin-banner.jpeg';
            link.href = dataUrl;
            link.click();
          })
    }

    let previewBarRef = useRef(null);
    const {backgroundColor, headerColor, headerSize, headerText} = useContext(ThemeContext)
    return(
        <>
            <PreviewBarContainer vwWidth="60vw" backgroundColor={backgroundColor} id="preview-bar" ref={previewBarRef}>
                <H1 fColor={headerColor} fSize={headerSize}>{headerText}</H1>
            </PreviewBarContainer>
            <button onClick={handleGenerateImg}>Generate</button>
        </>
    )
}

export default PreviewBar;