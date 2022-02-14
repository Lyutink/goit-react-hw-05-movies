import React from 'react';
import { Oval } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

export default function Loader() {
    return (
        <LoaderContainer>
            <Oval color="#3f51b5" height="100px" width="100px" />
        </LoaderContainer>
   )};