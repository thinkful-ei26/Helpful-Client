import React from "react";
import { followOrg, unFollowOrg } from "../utils/followOrg";

const GenerateButton = props => {
    if (props.toggle) {
        return (
            <React.Fragment>
                <button>Renders when true</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <button onClick={followOrg(props.id)}>i wasnt ready</button>
                <button onClick={unFollowOrg(props.id)}>i wasnt ready</button>
            </React.Fragment>
        );
    }
};

export default GenerateButton;
