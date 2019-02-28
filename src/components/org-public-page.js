import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import OrgPublicPageEventList from "./org-public-page-event-list";
import UserCanRateOrg from "./user-can-rate-org";
// import UserComments from "./usercomments";
import "../stylesheets/org-public-page.css";
import getOrgs from "../utils/fetchOrg";
import getOrgEvents from "../utils/fetchEvent";
import { PointMap } from "./map";

export default function OrgPublicPage(props) {
    // const orgId =  props.location.state.org.id;
    const [view] = useState(<OrgPublicPageEventList />);
    const [following, setFollowing] = useState(false);
    const [followData, setFollowdata] = useState(null);
    const [orgs, setOrgs] = useState(null);
    const [orgEvents, setOrgEvents] = useState(null);
    const [orgMap, setOrgMap] = useState(null);

    const orgId = props.match.params.id;

    const fetchData = props => {
        getOrgs(orgId).then(res => setOrgs(res.data));
    };
    const fetchEvents = () => {
        getOrgEvents(orgId).then(res => {
            let newList = res.data.map((event, index) => {
                return <li key={index}>{event.name}</li>;
            });
            setOrgEvents(newList);
        });
    };

    const generateFollowButton = () => {
        if (!following) {
            return (
                <button className='follow-button' onClick={() => followOrg()}>
                    Follow
                </button>
            );
        } else if (following) {
            return (
                <button
                    className='unfollow-button'
                    onClick={() => unFollowOrg()}>
                    Unfollow
                </button>
            );
        }
    };

    // check to see if user is following this org or not, and call generateFollowButton()
    const fetchFollow = async () => {
        await axios(`${API_BASE_URL}/follow/following/${orgId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        }).then(res => {
            if (res.data) {
                setFollowing(true);
                setFollowdata(res.data);
            } else if (!res.data) {
                setFollowing(false);
            }
        });
    };

    // follow an organization
    const followOrg = async () => {
        await axios({
            method: "post",
            url: `${API_BASE_URL}/follow`,
            data: { orgId },
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        }).then(res => {
            if (res.status === 200) {
                setFollowing(true);
                setFollowdata(res.data);
            }
        });
    };

    const unFollowOrg = async () => {
        await axios({
            method: "delete",
            url: `${API_BASE_URL}/follow`,
            data: {
                followId: followData.id,
            },
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        }).then(res => {
            if (res.status === 200) {
                setFollowing(false);
            }
        });
    };

    if (orgMap === null) {
        if (orgs) {
            setOrgMap(
                <PointMap
                    marker={orgs}
                    isMarkerShown
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            );
        }
    }

    // document.addEventListener('DOMContentLoaded', function() {
    //   let elems = document.querySelectorAll('.fixed-action-btn');
    //   let instances = M.FloatingActionButton.init(elems, {
    //     direction: "left",
    //     // toolbarEnabled: true
    //     hoverEnabled: true
    //   });
    //   return instances;
    // }, []);

    useEffect(() => {
        fetchFollow();
        fetchData(props);
        fetchEvents();
    }, [props.match.params.id]);

    if (orgs) {
        return (
            <div className='org-public-page containerB'>
                <div className='org-public-content container'>
                    <div className='org-public-text-area'>
                        <span className='header'>{orgs.name}</span>
                        <img
                            alt='Organization Logo'
                            className='responsive-img'
                            src={orgs.imgUrl}
                        />
                        {orgMap}
                        <UserCanRateOrg orgId={orgId} />
                        {/* <UserComments/> */}
                        <p className='flow-text'>{orgs.description}</p>
                        <p className='flow-text'>{orgs.location}</p>
                    </div>

                    {generateFollowButton()}

                    <div className='container'>
                        <p>{orgEvents}</p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <p>I am loading text</p>
        </div>
    );
}
