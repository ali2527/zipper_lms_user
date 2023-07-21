import { Row, Col } from "antd";
import {FiPhoneCall} from "react-icons/fi"
import {HiOutlineChatAlt2} from "react-icons/hi"
import {MdOutlineMarkEmailUnread} from "react-icons/md"

const InfoSection = () => {
  return (
    <Row style={{justifyContent:'center', alignItems:'center'}}>
    <Col xs={22} lg={20}> 
    <div className="infoSection" style={{width:'100%', padding:'20px', background:"#ad0103" , borderRadius:'10px', marginTop:"-60px"}}>
    <Row style={{justifyContent:'center', alignItems:'center'}}>
    <Col xs={24} lg={10} style={{display:'flex',alignItems:'center'}}>
     <Row>
      <Col xs={24} lg={16} style={{display:'flex',alignItems:'center'}}>
      <p className="infoSectionText1" style={{color:'white', fontWeight:'bold', fontSize:'18px', margin:0}}>Customizing logo designs for 15 years.
Let’s start making yours.</p>
      </Col>
     </Row>
     
      </Col>
       <Col className="infoSectionCol" xs={24} lg={4} style={{borderLeft:'1px solid white', padding:'0px 20px'}}>
       <FiPhoneCall  style={{fontSize:'25px', color:'FFFF00'}}/>
       <p style={{color:'white', fontWeight:700, fontSize:'16px',margin:5}}>Call Us</p>
       <p style={{color:'#FFFF00', fontWeight:'bold', fontSize:'16px', margin:0}}>(917)-936-0406</p>
      </Col>
      <Col xs={24} lg={3} className="infoSectionCol"  style={{borderLeft:'1px solid white',  padding:'0px 20px'}}>
      <HiOutlineChatAlt2  style={{fontSize:'25px', color:'FFFF00'}}/>
       <p style={{color:'white', fontWeight:700, fontSize:'16px',margin:5}}>Start</p>
       <p style={{color:'#FFFF00', fontWeight:'bold', fontSize:'16px', margin:0}}>Live Chat</p>
      </Col>
      <Col xs={24} lg={7} className="infoSectionCol" style={{borderLeft:'1px solid white',  padding:'0px 20px'}}>
      <MdOutlineMarkEmailUnread  style={{fontSize:'25px', color:'FFFF00'}}/>
       <p style={{color:'white', fontWeight:700, fontSize:'16px',margin:5}}>Email Us</p>
       <p style={{color:'#FFFF00', fontWeight:'bold', fontSize:'16px', margin:0}}>support@logomagicians.com</p>
      </Col>
  </Row>
    </div>
    </Col>
  </Row>
  );
};

export default InfoSection;
