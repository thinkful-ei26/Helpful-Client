import React from "react";
import { shallow } from "../enzyme";

import Footer from "../components/layout/footer";

describe("Footer Test", () => {
    it("renders", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find(".container")).toBeDefined();
        expect(wrapper.find(".footer-copyright")).toBeDefined();
    });
});
