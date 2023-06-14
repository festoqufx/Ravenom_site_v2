
import React, { useEffect } from "react";
import './timeline1.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaReact } from 'react-icons/fa';
import { BsWordpress } from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';
const Timeline1 = () => {
    useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,});
    }, []);
    return (
<section className="parallax">
    <p>&nbsp;</p>
    <h2 data-aos="zoom-in-up">Timeline</h2>
    <p>&nbsp;</p>
    <VerticalTimeline>
      {/* <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#F0F0F0', color: '#FFFFFF' }} contentArrowStyle={{ borderRight: '7px solid  #F0F0F0' }} date="JULY 2016 - present" iconStyle={{ background: '#F0F0F0', color: '#000'  }} icon={ <FaReact />} > 
      <h3 className="vertical-timeline-element-title" style={{ color: '#000'}}>Visa</h3>
      <h5 className="vertical-timeline-element-subtitle" style={{ color: '#000'}}>DIGITAL CONTENT MANAGER/Implementation Analyst</h5>
      <h6 style={{ color: '#000'}} >AEM, Visual Studio, Bastion Host, Bootstrap, HTML5, CSS, JS, SharePoint</h6>
      <h6 style={{ color: '#000'}}>Fulltime</h6>
      </VerticalTimelineElement> */}
      <VerticalTimelineElement className="vertical-timeline-element--education" date="JULY 2016 - up to present" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <BsWordpress />} > 
      <h3 className="vertical-timeline-element-title">Visa</h3>
      <h5 className="vertical-timeline-element-subtitle">DIGITAL CONTENT MANAGER/Implementation Analyst</h5>
      <h6>AEM, Visual Studio, Bastion Host, Bootstrap, HTML5, CSS, JS, SharePoint</h6>
      <h6>Fulltime</h6>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work" date="OCT 2015 - JULY 2016" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <FaReact />} > 
      <h3 className="vertical-timeline-element-title">QUINN DATA FACILITIES, INC.</h3>
      <h5 className="vertical-timeline-element-subtitle">BACK-END WEB DEVELOPER</h5>
      <h6>Laravel, MySQL, MsSQL, Postgres, Wordpress, Bootstrap, HTML5, CSS, JS</h6>
      <h6>Fulltime</h6>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work" date="MAY 2015 - SEPT 2015" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <FaReact />} > 
      <h3 className="vertical-timeline-element-title">SMART COMMUNICATION, INC.</h3>
      <h5 className="vertical-timeline-element-subtitle">IT CONSULTANT/FRONT-END WEB DEVELOPER</h5>
      <h6>Laravel, MySQL, MsSQL, Postgres, Wordpress, Bootstrap, HTML5, CSS, JS</h6>
      <h6>Contractual</h6>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work" date="OCT 2014 - APR 2015" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <FaReact />} > 
      <h3 className="vertical-timeline-element-title">NASDAQ</h3>
      <h5 className="vertical-timeline-element-subtitle">WEB DESIGNER DEVELOPER</h5>
      <h6>Phoenix, Web360, Bootstrap, Foundation, ColdFusion, HTML5, XSLT, CSS, JS</h6>
      <h6>Contractual</h6>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education" date="SEPT 2013 - OCT 2014" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <BsWordpress />} > 
      <h3 className="vertical-timeline-element-title">CROSSPOWER PHILS, INC.</h3>
      <h5 className="vertical-timeline-element-subtitle">MULTIMEDIA WEB DESIGNER</h5>
      <h6>Wordpress, Genesis, Initializr, PHP/Mysql, Bootstrap, HTML5, JS, CSS</h6>
      <h6>Fulltime</h6>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education" date="FEB 2008 - APR 2013" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <BsWordpress />} > 
      <h3 className="vertical-timeline-element-title">SPI GLOBAL</h3>
      <h5 className="vertical-timeline-element-subtitle">BACK-END WEB DEVELOPER</h5>
      <h6>Laravel, MySQL, MsSQL, Postgres, Wordpress, Bootstrap, HTML5, CSS, JS</h6>
      <h6>Fulltime</h6>
      </VerticalTimelineElement>
     
      <VerticalTimelineElement iconStyle={{ background: '#F0F0F0', color: '#000000' }} icon={ <AiTwotoneStar />} />
    </VerticalTimeline>
  </section>

    );
  };
export default Timeline1