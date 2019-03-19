import React from "react";
import "../stylesheets/dashboardCreateEvent.css";

export default function OrgDashboardAddUser() {
    return (
        <div className='create-event-form'>
            <form action='submit'>
                <fieldset>
                    <legend>Add User Roles</legend>
                    <div className='create-event-row'>
                        <label htmlFor='event-name'> Name</label>
                        <input required type='text' placeholder='member-name' />
                    </div>
                    <div className='submit-cancel-buttons'>
                        <button className='submit'>Submit</button>
                        <button>Cancel</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
