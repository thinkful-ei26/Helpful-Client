import React from "react";
import "../stylesheets/org-card.css";
import { Link } from "react-router-dom";

export default function OrganizationCard(props) {

  if (!props.org) {
    return "Loading...";
  }

  // if (props.admin) {
  //   console.log('props.admin')
  //   return(
  //     <Link to={`/orgdashboard/${props.org.id}`}>
  //       <div>
  //         <div className="card">
  //           <div className="card-image small">
  //             <img src={props.org.imgUrl} />
  //           </div>
  //           <div className="card-content">
  //             <p className="flow-text">{props.org.description}</p>
  //             <p className="flow-text">{props.org.name}</p>
  //           </div>
  //           <div className="card-action">
  //             <div className="flow-text truncate">
  //               <p> Where: {props.org.location}</p>
  //               <p> Contact: {props.org.contact}</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </Link>
  //   );
  // }

  return (
    <Link to={`/organization/${props.org.id}`}>
      <div
      // route to org page and passes org data in state
      >
        <div className="card">
          <div className="card-image small">
            <img src={props.org.imgUrl} />
          </div>
          <div className="card-content">
            <p className="flow-text">{props.org.description}</p>
            <p className="flow-text">{props.org.name}</p>
          </div>
          <div className="card-action">
            <div className="flow-text truncate">
              <p> Where: {props.org.location}</p>
              <p> Contact: {props.org.contact}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
