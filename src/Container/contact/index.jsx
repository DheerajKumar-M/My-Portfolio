import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../Components/pageContentHeader";

const Contact=()=>{
    return(
        <section id="contact" className="contact">
            <PageHeaderContent headerText="Contact Me" icon={<BsInfoCircleFill size={40} />} />
        </section>
    )
}

export default Contact;