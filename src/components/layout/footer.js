import React from "react";

const Footer = () => {
    return (
        <section className="footer-container">
            <footer>
                <h1>About Helpful</h1>
                <section className="about">
                    Helpful brings community organizations and volunteers together.
                    If you want to make a difference in your community,
                    you can find groups and events that would love to get your help.
                    If you are an organization in need of volunteers,
                    you can post your organization's profile and publicize your events here.
                </section>
            </footer>

            <section className="sub-footer">
                <span>&copy; Brogrammers 2019 </span>
            </section>
        </section>
    );
};

export default Footer;
