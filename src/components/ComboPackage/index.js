import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Row, Col, Typography,Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { BsCheckLg, BsSquareFill } from "react-icons/bs";
const { Panel } = Collapse;
import { Collapse } from "antd";

const ComboPackage = ({
  title,
  questions,
  buttons,
  others,
  image,
  height,
  bg,
  titleStyles,
}) => {
  const [loadCount, setLoadCount] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [expandIconPosition, setExpandIconPosition] = useState("end");

  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setLoadCount(loadCount + 1);
  }, [inView]);

  const antIcon = (
    <LoadingOutlined
      style={{
        color: "#ad0103",
        fontSize: 55,
      }}
      spin
    />
  );

  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };

  return (
    <Row
      ref={ref}
      style={{
        background: "#efefef",
        minHeight: height ? height : 550,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "40px 0",
      }}
    >
      <Col xs={24} sm={24} md={24} lg={20}>
        <Row
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography.Title
            level={3}
            style={{
              fontWeight: "bolder",
              textAlign: "center",
              ...titleStyles,
            }}
          >
            {title}
          </Typography.Title>
        </Row>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col
            xs={24}
            className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
          >
            <Row style={{ padding: 20, alignItems: "center",   position: "relative" }}>
              <div style={{position:'absolute', right:50, top:0}}><Image src="/images/bestSeller.webp" width={120}  height={110}  preview={false}/></div>
            
              <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#2a2a2a",
                        width: "100%",
                        margin: "10px 0",
                        padding: "7px",
                        border: "none",
                        borderRadius: "10px",
                     
                      }}
                    >
                     
                      <Row
                        gutter={20}
                        style={{
                          width: "100%",
                          display: "flex",
                          padding: "20px 10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Col xs={24} md={12}>
                          <Row gutter={20}>
                            <Col xs={24} md={12}>
                              <Typography.Title
                                level={4}
                                style={{
                                  color: "yellow",
                                  fontSize: 16,
                                  fontWeight: 600,
                                  marginBottom: 5,
                                }}
                              >
                                {"Logo Design"}
                              </Typography.Title>
                              <ul
                                style={{
                                  listStyleType: "none",
                                  paddingLeft: 10,
                                }}
                              >
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"Unlimited Logo Design Concepts"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"3 Dedicated Designer"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"Social Media Icon Design"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"Icon Design"}
                                  </p>
                                </li>
                              </ul>
                            </Col>
                            <Col xs={24} md={12}>
                              <Typography.Title
                                level={4}
                                style={{
                                  color: "yellow",
                                  fontSize: 16,
                                  fontWeight: 600,
                                  marginBottom: 5,
                                }}
                              >
                                {"Branding"}
                              </Typography.Title>
                              <ul
                                style={{
                                  listStyleType: "none",
                                  paddingLeft: 10,
                                }}
                              >
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"Business Card"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"Letterhead"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"Envelope"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"Fax Template"}
                                  </p>
                                </li>
                              </ul>
                            </Col>
                          </Row>
                          <br />

                          <Row gutter={20}>
                            <Col xs={24} md={12}>
                              <Typography.Title
                                level={4}
                                style={{
                                  color: "yellow",
                                  fontSize: 16,
                                  fontWeight: 600,
                                  marginBottom: 5,
                                }}
                              >
                                {"Features"}
                              </Typography.Title>
                              <ul
                                style={{
                                  listStyleType: "none",
                                  paddingLeft: 10,
                                }}
                              >
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"Dedicated Account Manager"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"100% Ownership Rights"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"100% Satisfaction Guarantee"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"100% Unique Design Guarantee"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"100% Money Back Guarantee"}
                                  </p>
                                </li>
                              </ul>
                            </Col>
                            <Col xs={24} md={12}>
                              <Typography.Title
                                level={4}
                                style={{
                                  color: "yellow",
                                  fontSize: 16,
                                  fontWeight: 600,
                                  marginBottom: 5,
                                }}
                              >
                                {"Final Files"}
                              </Typography.Title>
                              <ul
                                style={{
                                  listStyleType: "none",
                                  paddingLeft: 10,
                                }}
                              >
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"JPG"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"PDF"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"AI"}
                                  </p>
                                </li>
                                <li
                                 
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    margin: "5px 0",
                                  }}
                                >
                                  <p
                                   
                                    style={{
                                      fontSize: 14,
                                      color: "white",
                                      // display: "inline-block",
                                      margin: 0,
                                    }}
                                  >
                                    <BsCheckLg
                                      style={{
                                        color: "white",
                                        fontSize: 10,
                                        display: "inline",
                                      }}
                                    />
                                    &emsp;
                                    {"PSD"}
                                  </p>
                                </li>
                              </ul>
                            </Col>
                          </Row>
                        </Col>

                        <Col xs={24} md={6}>
                          <Typography.Title
                            level={4}
                            style={{
                              color: "yellow",
                              fontSize: 16,
                              fontWeight: 600,
                              marginBottom: 5,
                            }}
                          >
                            {"Website"}
                          </Typography.Title>
                          <ul
                            style={{
                              listStyleType: "none",
                              paddingLeft: 10,
                            }}
                          >
                            <li
                             
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                margin: "10px 0",
                              }}
                            >
                              <p
                               
                                style={{
                                  fontSize: 14,
                                  color: "white",
                                  // display: "inline-block",
                                  margin: 0,
                                }}
                              >
                                <BsCheckLg
                                  style={{
                                    color: "white",
                                    fontSize: 10,
                                    display: "inline",
                                  }}
                                />
                                &emsp;
                                {"Unlimited Pages Website"}
                              </p>
                            </li>
                            <li
                             
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                margin: "10px 0",
                              }}
                            >
                              <p
                               
                                style={{
                                  fontSize: 14,
                                  color: "white",
                                  // display: "inline-block",
                                  margin: 0,
                                }}
                              >
                                <BsCheckLg
                                  style={{
                                    color: "white",
                                    fontSize: 10,
                                    display: "inline",
                                  }}
                                />
                                &emsp;
                                {"Content Management System (CMS)"}
                              </p>
                            </li>
                            <li
                             
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                margin: "10px 0",
                              }}
                            >
                              <p
                               
                                style={{
                                  fontSize: 14,
                                  color: "white",
                                  // display: "inline-block",
                                  margin: 0,
                                }}
                              >
                                <BsCheckLg
                                  style={{
                                    color: "white",
                                    fontSize: 10,
                                    display: "inline",
                                  }}
                                />
                                &emsp;
                                {"Mobile Responsive"}
                              </p>
                            </li>
                            <li
                             
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                margin: "10px 0",
                              }}
                            >
                              <p
                               
                                style={{
                                  fontSize: 14,
                                  color: "white",
                                  // display: "inline-block",
                                  margin: 0,
                                }}
                              >
                                <BsCheckLg
                                  style={{
                                    color: "white",
                                    fontSize: 10,
                                    display: "inline",
                                  }}
                                />
                                &emsp;
                                {"Team of Expert Designers & Developers"}
                              </p>
                            </li>

                            <li
                             
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                margin: "10px 0",
                              }}
                            >
                              <p
                               
                                style={{
                                  fontSize: 14,
                                  color: "white",
                                  // display: "inline-block",
                                  margin: 0,
                                }}
                              >
                                <BsCheckLg
                                  style={{
                                    color: "white",
                                    fontSize: 10,
                                    display: "inline",
                                  }}
                                />
                                &emsp;
                                {"5 Stock Images"}
                              </p>
                            </li>
                            <li
                             
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                margin: "10px 0",
                              }}
                            >
                              <p
                               
                                style={{
                                  fontSize: 14,
                                  color: "white",
                                  // display: "inline-block",
                                  margin: 0,
                                }}
                              >
                                <BsCheckLg
                                  style={{
                                    color: "white",
                                    fontSize: 10,
                                    display: "inline",
                                  }}
                                />
                                &emsp;
                                {"3 Banner Designs"}
                              </p>
                            </li>
                            <li
                             
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                margin: "10px 0",
                              }}
                            >
                              <p
                               
                                style={{
                                  fontSize: 14,
                                  color: "white",
                                  // display: "inline-block",
                                  margin: 0,
                                }}
                              >
                                <BsCheckLg
                                  style={{
                                    color: "white",
                                    fontSize: 10,
                                    display: "inline",
                                  }}
                                />
                                &emsp;
                                {"Complete W3C Certified HTML"}
                              </p>
                            </li>
                            <li
                             
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                margin: "10px 0",
                              }}
                            >
                              <p
                               
                                style={{
                                  fontSize: 14,
                                  color: "white",
                                  // display: "inline-block",
                                  margin: 0,
                                }}
                              >
                                <BsCheckLg
                                  style={{
                                    color: "white",
                                    fontSize: 10,
                                    display: "inline",
                                  }}
                                />
                                &emsp;
                                {"Complete Deployment"}
                              </p>
                            </li>
                          </ul>
                        </Col>

                        <Col
                          xs={24}
                          md={6}
                          style={{
                            textAlign: "right",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          
                          <div
                            style={{
                              padding: "10px 30px",
                              background: "#ad0103",
                              display: "flex",
                              width: "max-content",
                            }}
                          >
                            <Typography.Title
                              level={4}
                              style={{
                                color: "white",
                                fontSize: 25,
                                fontWeight: 900,
                                marginBottom: 0,
                              }}
                            >
                              {"$999.00"}
                            </Typography.Title>
                          </div>
                          <br />
                          <div
                            style={{
                              padding: "10px 30px",
                              background: "#ffff00",
                              display: "flex",
                              flexDirection: "column",
                              textAlign: "center",
                              width: "max-content",
                            }}
                          >
                            <Typography.Title
                              level={4}
                              style={{
                                color: "black",
                                fontSize: 25,
                                fontWeight: "bold",
                                margin: 0,
                              }}
                            >
                              {"Upto 70% Off"}
                            </Typography.Title>
                            <Typography.Title
                              level={4}
                              style={{
                                color: "black",
                                fontSize: 16,
                                fontWeight: 900,
                                margin: 0,
                                textDecoration: "line-through",
                              }}
                            >
                              {"$3999"}
                            </Typography.Title>
                          </div>
                          <br />
                          <button
                            className="ant-btn"
                            style={{
                              background: "#061a61",
                              color: "#fff",
                              borderColor: "#061a61",
                              borderRadius: "5px",
                              height: "40px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              marginTop: "5px",
                            }}
                          >
                            PreOrder Now
                          </button>
                        </Col>
                      </Row>
                    </div>
              
            </Row>

            <Row style={{ paddingLeft: 20 }}>{buttons}</Row>
          </Col>

          {others}
        </Row>
      </Col>
    </Row>
  );
};

export default ComboPackage;
