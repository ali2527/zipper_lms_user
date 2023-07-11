import { useState } from "react";
import { Image } from "antd"
import { useRouter } from 'next/router'
import { Col, Layout, Row, Form, Input } from 'antd';
import { FaFacebookF,FaTwitter, FaInstagram,FaYoutube } from "react-icons/fa"
import { BsPhone, BsChatLeftDots } from "react-icons/bs";
import MainButton from "../MainButton";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link'

const { Footer } = Layout;
const { TextArea } = Input;

const CustomFooter = () => {
    const router = useRouter()
     const [formData, setFormData] = useState({
   name: "",
    email: "",
    phone: "",
  });
    const [loading, setLoading] = useState(false);


    return (
      <Footer style={{ height: "auto", background: "#f5f8fa", padding: "0" }}>
    
        <Row
          style={{
            background: "#161616",
            justifyContent: "center",
            padding: "50px 40px",
          }}
        >
          <Col xs={24} md={20}>
            <Row style={{ justifyContent: "center" }}>
              <Col
              xs={24} md={12}
                style={{ padding: "30px 0",  fontFamily: "Lato" }}
                className={"footer-column"}
              >
               
                <div style={{ padding: "10px 30px 0px 10px" }}>
                <h4 style={{ color: "white", fontWeight: "bold", fontSize:'30px' }}>
                Ready To Give Your Business The Perfect Direction?
              </h4>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={() => saveForm()}
              >
                <Row style={{ justifyContent: "center" }} gutter={20}>
                  <Col xs={24} >
                    <Form.Item
                      name="Name"
                      rules={[
                        {
                          required: true,
                          message: "This field is required!",
                        },
                      ]}
                    >
                      <Input
                        value={formData?.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="Name*"
                        style={{
                          borderRadius: 5,
                          height: 42,
                          background: "transparent",
                          color:'white',
                          boxShadow: "none",
                          borderColor: "lightgrey",
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "This field is required!",
                        },
                      ]}
                    >
                      <Input
                        type={"email"}
                        value={formData?.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Email*"
                        style={{
                          borderRadius: 5,
                          height: 42,
                          background: "transparent",
                          color:'white',
                          boxShadow: "none",
                          borderColor: "lightgrey",
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "This field is required!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Phone*"
                        value={formData?.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        style={{
                          borderRadius: 5,
                          height: 42,
                          background: "transparent",
                          color:'white',
                          boxShadow: "none",
                          borderColor: "lightgrey",
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                  <Form.Item
                    style={{
                      textAlign: "center",
                      textAlignLast: "center",
                      marginTop: 0,
                    }}
                  >
                    <button
                      className="ant-btn"
                      disabled={loading}
                      type="submit"
                      style={{
                        background: loading ? "#f97526bf" : "#061a61",
                        color: "#fff",
                        borderColor: loading ? "#f97526bf" : "#061a61",
                        borderRadius: "5px",
                        height: "40px",
                        width:'100%',
                        fontWeight: 500,
                        marginTop: "5px",
                      }}
                    >
                      {loading ? <Spin indicator={antIcon} /> : "Send Message"}
                    </button>
                  </Form.Item>
                  </Col>
                </Row>
   
              </Form>
                </div>
               
              </Col>
              <Col xs={24} md={12} style={{display:'flex',justifyContent: "center", alignItems:'center'}}>
                <Row style={{ justifyContent: "center", alignItems:'center'}}>
                <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  flexDirection: "column",
                }}
                className="header-btn-container"
              >
                <MainButton
                  className="header-btn"
                  style={{
                    fontSize: 17,
                    padding: "7px 10px",
                    height: "auto",
                    fontWeight: 500,
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0px 5px",
                  }}
                >
                  <BsChatLeftDots style={{ marginRight: 10, fontSize: 20, color:'yellow' }} />
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                   Live Chat With Experts
                  </span>
                </MainButton>


                <a href="tel:(917) 936-0406">
 
                <MainButton
                  className="header-btn"
                  style={{
                    fontSize: 17,
                    padding: "5px 10px",
                    height: "auto",
                    fontWeight: 500,
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0px 5px",
                  }}
                >
                  <BsPhone style={{ marginRight: 10, fontSize: 25, color:'yellow'  }} />
                  <span style={{ fontSize: "14px", fontWeight: "400" }}>
                    Call Us Now : (917)-936-0406
                  </span>
               
                </MainButton>
                </a>
                <br/>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={200}
                  style={{ maxWidth: 220 }}
                  src="/images/cards_icons.webp"
                />
                <br/>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={200}
                  style={{ maxWidth: 220 }}
                  src="/images/best_sellers_icons.webp"
                />
              </div>
                
                </Row>
              </Col>
              
              
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            background: "#292929",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "rgba(255,255,255,.9)", margin:'10px 0', textAlign: "center", display:'inline' }}>
           Copyright © {new Date().getFullYear()} Logo Magician All right Reserved
            </p>
         
        </Row>
      </Footer>
    );
}

export default CustomFooter