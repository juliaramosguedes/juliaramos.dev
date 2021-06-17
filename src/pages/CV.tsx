import React from "react";

import { Layout } from "../components";
import { Iframe } from "../styles/components/Iframe";

const CV: React.FC = () => {
    return (
        <Layout>
            <Iframe
                id="resume"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FfE0LkM9RAHJXSeQHKmAp7Y%2FCV-Julia-Ramos%3Fnode-id%3D0%253A1"
                allowFullScreen
            />
        </Layout>
    );
};

export default CV;
