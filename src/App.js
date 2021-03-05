import React, {useState} from "react";
import styled from "styled-components"

let Button = styled.button`
  ${props => props.field === props.type ? "background-color:blue;color:white;" : "background-color:white;color:black"}
`;
let Range = styled.input`
        overflow: hidden;
        width: 22vw;
        border:1px solid black;
        -webkit-appearance: none;
        background-color:white;
        &::-webkit-slider-runnable-track {
          height: 1.8vh;
          -webkit-appearance: none;
          color: #13bba4;
          margin-top: -1px;
        }
        &::-webkit-slider-thumb {
          width: 20px;
          -webkit-appearance: none;
          height: 22vh;
          cursor: ew-resize;border:2px solid black;
          background:${props => props.color};
          box-shadow: -22vw 0 0 22vw ${props => props.color};
         }
`
let TextWrapper = styled.div`
        width:36vw;
        background-color:${props => "rgb("+props.color+")"}
`
let Text = styled.p`
  color:${props => "rgb("+props.color+")"}
`
const App = (props) => {
    let [field, setField] = useState("color")
    return (
        <div>
            <fieldset>
                <legend>Select:</legend>
                <Button type="color" onClick={() => {
                    setField("color")
                }} field={field}>color</Button>
                <Button type="background" onClick={() => {
                    setField("background")
                }} field={field}>backgroundColor</Button>
            </fieldset>
            <Range type="range" min="0" max="250" color="red" step="1"
                   value={field === "background" ? props.backgroundColor[0] : props.textColor[0]} onChange={(e) => {
                props.ChangeRange(field, 0, e)
            }}/>
            <Range type="range" min="0" max="250" color="green" step="1"
                   value={field === "background" ? props.backgroundColor[1] : props.textColor[1]} onChange={(e) => {
                props.ChangeRange(field, 1, e)
            }}/>
            <Range type="range" min="0" max="250" color="blue" step="1"
                   value={field === "background" ? props.backgroundColor[2] : props.textColor[2]} onChange={(e) => {
                props.ChangeRange(field, 2, e)
            }}/>
            <TextWrapper color={props.backgroundColor}>
                <Text color={props.textColor}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere nibh ac pharetra
                    efficitur. In
                    consectetur lorem vitae consequat aliquam. Fusce arcu elit, dignissim blandit finibus in, ornare et
                    ipsum. Fusce efficitur lacinia fermentum. Etiam risus ipsum, hendrerit vel mi non, malesuada
                    hendrerit
                    sapien. Nulla ex elit, rhoncus et arcu nec, dignissim pretium risus. In hac habitasse platea
                    dictumst.
                    Duis elementum tristique luctus. Aenean rhoncus metus a dignissim cursus. Duis sapien elit, pharetra
                    in
                    pretium et, tempus sit amet risus. Ut sit amet fermentum magna. Fusce eleifend porta nulla vitae
                    cursus.
                    Mauris maximus sit amet diam in volutpat. Quisque auctor mollis risus, ut elementum libero aliquam
                    lacinia. Vestibulum enim sapien, auctor porta neque vitae, fringilla consectetur ipsum. Integer
                    consectetur sagittis erat in mollis.</Text>
            </TextWrapper>
        </div>
    )
}

export default App;
