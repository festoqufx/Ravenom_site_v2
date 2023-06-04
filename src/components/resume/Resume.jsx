
import React, { useEffect } from "react";
import './resume.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaReact } from 'react-icons/fa';
import { BsWordpress } from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';
const Resume = () => {
    useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,});
    }, []);
    return (
<section data-aos="zoom-in-up" className="parallax">
    <h2>Timeline</h2>
    <VerticalTimeline>
      <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#F0F0F0', color: '#000' }} contentArrowStyle={{ borderRight: '7px solid  #F0F0F0' }} date="2011 - present" iconStyle={{ background: '#F0F0F0', color: '#000'  }} icon={ <FaReact />} > 
      <h3 className="vertical-timeline-element-title">SPI GLOBAL</h3>
      <h4 className="vertical-timeline-element-subtitle">SENIOR WEB CONTENT EDITOR/ANALYST</h4>
      <h5>Arbortext, Contenta DB, SGML, DTD, DHTML, XHTML, XML, CSS, JIRA, Citrix</h5>
      <h5>Fulltime</h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work" date="2010 - 2011" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <FaReact />} > 
      <h3 className="vertical-timeline-element-title">SPI GLOBAL</h3>
      <h4 className="vertical-timeline-element-subtitle">SENIOR WEB CONTENT EDITOR/ANALYST</h4>
      <h5>Arbortext, Contenta DB, SGML, DTD, DHTML, XHTML, XML, CSS, JIRA, Citrix</h5>
      <h5>Fulltime</h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work" date="2008 - 2010" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <FaReact />} > 
      <h3 className="vertical-timeline-element-title">SPI GLOBAL</h3>
      <h4 className="vertical-timeline-element-subtitle">SENIOR WEB CONTENT EDITOR/ANALYST</h4>
      <h5>Arbortext, Contenta DB, SGML, DTD, DHTML, XHTML, XML, CSS, JIRA, Citrix</h5>
      <h5>Fulltime</h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--work" date="2006 - 2008" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <FaReact />} > 
      <h3 className="vertical-timeline-element-title">SPI GLOBAL</h3>
      <h4 className="vertical-timeline-element-subtitle">SENIOR WEB CONTENT EDITOR/ANALYST</h4>
      <h5>Arbortext, Contenta DB, SGML, DTD, DHTML, XHTML, XML, CSS, JIRA, Citrix</h5>
      <h5>Fulltime</h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education" date="April 2013" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <BsWordpress />} > 
      <h3 className="vertical-timeline-element-title">SPI GLOBAL</h3>
      <h4 className="vertical-timeline-element-subtitle">SENIOR WEB CONTENT EDITOR/ANALYST</h4>
      <h5>Arbortext, Contenta DB, SGML, DTD, DHTML, XHTML, XML, CSS, JIRA, Citrix</h5>
      <h5>Fulltime</h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education" date="November 2012" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <BsWordpress />} > 
      <h3 className="vertical-timeline-element-title">SPI GLOBAL</h3>
      <h4 className="vertical-timeline-element-subtitle">SENIOR WEB CONTENT EDITOR/ANALYST</h4>
      <h5>Arbortext, Contenta DB, SGML, DTD, DHTML, XHTML, XML, CSS, JIRA, Citrix</h5>
      <h5>Fulltime</h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education" date="FEB 2008 - APR 2013" iconStyle={{ background: '#F0F0F0', color: '#000' }} icon={ <BsWordpress />} > 
      <h3 className="vertical-timeline-element-title">SPI GLOBAL</h3>
      <h4 className="vertical-timeline-element-subtitle">SENIOR WEB CONTENT EDITOR/ANALYST</h4>
      <h5>Arbortext, Contenta DB, SGML, DTD, DHTML, XHTML, XML, CSS, JIRA, Citrix</h5>
      <h5>Fulltime</h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement iconStyle={{ background: '#F0F0F0', color: '#000000' }} icon={ <AiTwotoneStar />} />
    </VerticalTimeline>
  </section>

    );
  };
export default Resume