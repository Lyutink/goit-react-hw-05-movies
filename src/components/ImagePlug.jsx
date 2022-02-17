import { FcSearch } from "react-icons/fc";
import { IconContext } from "react-icons";
import styled from "styled-components";

const IconContainer = styled.div`
height: 280px;
width: 180px;
display: flex;
justify-content: center;
align-items: flex-end;
background-color: #ffffff;
`

const ImagePlug = () => {

    return (
    <IconContext.Provider value={{ size: "180px" }}>
     <IconContainer>
      <FcSearch />
     </IconContainer>
    </IconContext.Provider>
    )
}

export default ImagePlug;