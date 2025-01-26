import React from "react";
import PageHeaderContent from "../../Components/pageContentHeader";
import { BsInfoCircleFill } from "react-icons/bs";
const Portfolio=()=>{
    return(
        <section id="portfolio" className="portfolio">
            <PageHeaderContent headerText="My Portfolio" icon={<BsInfoCircleFill size={40} />} />
        </section>
    )
}

export default Portfolio;