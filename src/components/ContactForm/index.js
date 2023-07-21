import {useState} from 'react'
import {
  Col,
  Row,
  Typography,
  Form,
  Input,
  message,
  Spin,
  List,
  Select,
  Upload,
  Button,

} from "antd";
const { Dragger } = Upload;
import { InboxOutlined } from '@ant-design/icons';
import Link from 'next/link'
import { CONTACTS } from "../../config/constants/api";
import { Post } from "../../config/api";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router"
import { FaPhoneAlt } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosChatboxes } from "react-icons/io";
import { MdMail } from "react-icons/md";
const { Option } = Select;
const { TextArea } = Input;


const ContactForm = ({ title, subtitle }) => {
  const router = useRouter()
  const [contactForm] = Form.useForm();
  const [formData, setFormData] = useState({
  name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
    image: "",
  });
  const [categories, setCategories] = useState(["Logo Design", "Web Design" , "Mobile Apps", "Animation", "Branding", "Digital Marketing","General Inquiry" ]);
  const [loading, setLoading] = useState(false);


  const saveForm = () => {
    setLoading(true);
    // create a formdata object
    const data = new FormData();
    // add the form data to the object
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("serviceType", formData.serviceType);
    data.append("message", formData.message);
    data.append("image", formData.image);

        try {
           
      Post(CONTACTS.save, data).then((response) => {
        setLoading(false);
        if (response.status) {
          message.success("Your message has been sent successfully");
          setFormData({
            name: "",
            email: "",
            phone: "",
            serviceType: "",
            message: "",
            image: "",
          });
          contactForm.setFieldsValue({
            name: "",
            email: "",
            phone: "",
            serviceType: "",
            message: "",
            image: "",
          });
          router.push("/thankyou-message")
        } else {
          message.error(
            response.message ? response.message : "Something went wrong"
          );
        }
      });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong");
    }
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        color: "#1e292f",
        fontSize: 24,
      }}
      spin
    />
  );
  return (
    <>
      <Row
        style={{
          marginBottom: 20,
          justifyContent: "center",
          padding: "50px 0 10px",
        }}
        id="contact"
      >
        <Col span={20} style={{ maxWidth: 845 }}>
          <div style={{ textAlign: "center" }}>
            {title && (
              <Typography.Title
                level={3}
                style={{ color: "#ad0103 ", fontSize: 45, fontWeight: 600 }}
              >
                {title}
              </Typography.Title>
            )}
            <Typography.Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#414141",
                marginTop: 15,
              }}
            >
              {subtitle}
            </Typography.Text>
          </div>
        </Col>
      </Row>

      <Row style={{ marginBottom: 70, justifyContent: "center" }}>
        <Col xs={24} lg={15}>
          <Row
            style={{
              justifyContent: "center",
              padding: "0px",
              overflow: "hidden",
              boxShadow: "4px 3px 17px 7px rgba(176,176,176,0.35)",
              borderRadius: "15px",
            }}
          >
            <Col
              xs={24}
              md={9}
              style={{
                backgroundColor: "#ad0103",
                padding: "30px",
                borderRadius: "15px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <h4 style={{ color: "white", fontWeight: "bold" }}>
                Contact Information
              </h4>
              <p style={{ color: "white" }}>
                Fill up the form and our team will get back to you in 24 hours{" "}
              </p>
              <List>
                <List.Item
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    border: "none",
                    color: "white",
                  }}
                >
                  <List.Item.Meta
                    avatar={
                      <IoIosChatboxes
                        style={{ color: "#061a61", fontSize: "25px" }}
                      />
                    }
                    title={
                      <span style={{ color: "white" }}>24/7 Live Chat</span>
                    }
                  />
                </List.Item>
                <List.Item
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    border: "none",
                    color: "white",
                  }}
                >
                  <List.Item.Meta
                    avatar={
                      <FaPhoneAlt
                        style={{ color: "#061a61", fontSize: "20px" }}
                      />
                    }
                    title={
                      <span style={{ color: "white" }}>+917 936 0406</span>
                    }
                  />
                </List.Item>
                <List.Item
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    border: "none",
                    color: "white",
                  }}
                >
                  <List.Item.Meta
                    avatar={
                      <MdMail style={{ color: "#061a61", fontSize: "25px" }} />
                    }
                    title={
                      <span style={{ color: "white" }}>
                        support@logomagicians.com
                      </span>
                    }
                  />
                </List.Item>
              </List>

              <div
                style={{
                  width: "250px",
                  height: "250px",
                  position: "absolute",
                  bottom: -120,
                  right: -120,
                  borderRadius: "200px",
                  backgroundColor: "#061a61",
                }}
              />
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  position: "absolute",
                  bottom: 65,
                  right: 55,
                  borderRadius: "200px",
                  backgroundColor: "rgba(255,255,255,0.8)",
                }}
              />
              <div style={{ position: "absolute", bottom: 5 }}>
                <Row gutter={16}>
                  <Col span={6}>
                    <Link
                      href={"https://www.facebook.com/logomagiciansofficial/"}
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <FiFacebook
                          style={{
                            color: "white",
                            fontSize: "16px",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </Link>
                  </Col>
                  <Col span={6}>
                    <Link href={"https://twitter.com/LogoMagicians"}>
                      <a target="_blank" rel="noopener noreferrer">
                        <FiTwitter
                          style={{
                            color: "white",
                            fontSize: "16px",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </Link>
                  </Col>
                  <Col span={6}>
                    <Link href={"https://www.instagram.com/logomagicians/"}>
                      <a target="_blank" rel="noopener noreferrer">
                        <FiInstagram
                          style={{
                            color: "white",
                            fontSize: "16px",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </Link>
                  </Col>
                  <Col span={6}>
                    <Link
                      href={
                        "https://www.youtube.com/channel/UC6qMBAlMt58IKjCQmb6HlnA"
                      }
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <AiOutlineYoutube
                          style={{
                            color: "white",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={24} md={15} style={{ paddingTop: "30px" }}>
              <Form
                form={contactForm}
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={() => saveForm()}
              >
                <Row style={{ justifyContent: "center" }} gutter={[20, 0]}>
                  <Col xs={20} md={10}>
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "This field is required!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Full Name*"
                        value={formData?.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        style={{
                          borderRadius: 5,
                          height: 42,
                          // background: "#efefef",
                          boxShadow: "none",
                          borderColor: "lightgrey",
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={20} md={10}>
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
                          // background: "#efefef",
                          boxShadow: "none",
                          borderColor: "lightgrey",
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={20} md={10}>
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
                          // background: "#efefef",
                          boxShadow: "none",
                          borderColor: "lightgrey",
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={20} md={10}>
                    <Form.Item
                      name="serviceType"
                      style={{ background: "transparent" }}
                      rules={[
                        {
                          required: true,
                          message: "This field is required!",
                        },
                      ]}
                    >
                      <Select
                        className="serviceType"
                        onChange={(e) =>
                          setFormData({ ...formData, serviceType: e })
                        }
                        placeholder="Service Type*"
                        style={{
                          borderRadius: 10,
                          height: 42,
                          background: "white",
                          boxShadow: "none",
                          borderColor: "lightgrey",
                        }}
                      >
                        {categories?.map((category) => (
                          <Option key={category} value={category}>
                            {category}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={20}>
                  <Form.Item
                        name="image"
                        required
                    >
                        <Dragger
                            name='image'
                            multiple={false}
                            height={100}
                            maxCount={1}
                            style={{padding:"0px 10px"}}
                            beforeUpload={(file, fileList) => {
                                setFormData({ ...formData, image:fileList[0]})
                                return false;
                            }}>
                           
                            <p className="ant-upload-text" style={{fontSize:'14px'}}>Upload File</p>
                            <p className="ant-upload-hint" style={{fontSize:'12px'}}>
We accpet only (JPG, JPEG, PNG, GIF, DOC, DOCX, PDF, EXCEL) file formats
                            </p>
                        </Dragger>
                    </Form.Item>
                  </Col>
                  <Col span={20}>
                    <Form.Item
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "This field is required!",
                        },
                      ]}
                    >
                      <TextArea
                        value={formData?.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        placeholder="To help us understand better, enter a brief description about you*"
                        rows={6}
                        style={{
                          borderRadius: 5,
                          // background: "#efefef",
                          boxShadow: "none",
                          borderColor: "lightgrey",
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row
                  style={{
                    textAlign: "right",
                    justifyContent: "flex-end",
                    padding: "0px 50px",
                  }}
                >
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
                        height: "50px",
                        fontWeight: 500,
                        marginTop: "5px",
                      }}
                    >
                      {loading ? <Spin indicator={antIcon} /> : "Send Message"}
                    </button>
                  </Form.Item>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ContactForm;
