import React from "react";

import { Col, Row, Typography, Layout, Card } from "antd";

function PrivacyPolicy() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="blueBackground"
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography.Title
          className="fontFamily1"
          style={{ fontSize: "30px", color: "white" }}
        >
          {<> Privacy Policy</>}
        </Typography.Title>
      </Row>

      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{ backgroundColor: "white", justifyContent: "center" }}
      >
        <Col xs={24} md={16}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",

              padding: "50px 20px",
            }}
          >
            <Card
              className="infoBox"
              bordered={false}
              style={{
                width: "100%",
                padding: "20px",
              }}
            >
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Protecting your private information is our priority. This
                Privacy Policy applies to zipperlearning.com and Zipper Learning
                LLC. It governs data collection and usage. For the purposes of
                this Privacy Policy, unless otherwise noted, all references to
                Zipper Learning LLC include zipperlearning.com. The Zipper
                Learning LLC website is an education and ecommerce site. By
                using the Zipper Learning LLC website, you consent to the data
                practices described in this statement.
              </Typography.Text>
              <br /> <br />
              <br /> <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Collection of your Personal Information
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                In order to better provide you with products and services
                offered, Zipper Learning LLC may collect personally identifiable
                information, such as your:
              </Typography.Text>
              <br />
              <ul>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    First and Last Name
                    <br />
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    E-mail Address
                    <br />
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Phone Number
                    <br />
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Employer
                    <br />
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Job Title.
                  </Typography.Text>
                </li>
              </ul>
              <br />
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                If you purchase Zipper Learning LLC's products and services, we
                collect billing and credit card information. This information is
                used to complete the purchase transaction.
              </Typography.Text>
              <br /> <br />
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Zipper Learning LLC may also collect anonymous demographic
                information, which is not unique to you, such as your:
              </Typography.Text>
              <ul>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Age
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Gender
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Race
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Religion
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Political Affiliation
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Household Income.
                  </Typography.Text>
                </li>
              </ul>
              <br />
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                We do not collect any personal information about you unless you
                voluntarily provide it to us. However, you may be required to
                provide certain personal information to us when you elect to use
                certain products or services. These may include: (a) registering
                for an account; (b) entering a contest sponsored by us or one of
                our partners; (c) signing up for special offers from selected
                third parties; (d) sending us an email message; (e) submitting
                your credit card or other payment information when ordering and
                purchasing products and services. To wit, we will use your
                information for, but not limited to, communicating with you in
                relation to services and/or products you have requested from us.
                We also may gather additional personal or non-personal
                information in the future.
              </Typography.Text>
              <br /> <br /> <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Use of your Personal Information
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Zipper Learning LLC collects and uses your personal information
                to operate and deliver the services you have requested.
                <br />
                <br />
                Zipper Learning LLC may also use your personal identifiable
                information to inform you of other products or services
                available from Zipper Learning LLC and its affiliates.
              </Typography.Text>
              <br /> <br /> <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Sharing Information with Third Parties
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Zipper Learning LLC does not sell, rent or lease its customer
                lists to third parties.
                <br />
                <br />
                Zipper Learning LLC may, from time to time, contact you on
                behalf of external business partners about a particular offering
                that may be of interest to you. In those cases, your unique
                personally identifiable information (e-mail, name, address,
                telephone number) is transferred to the third party. Zipper
                Learning LLC may share data with trusted partners to help
                perform statistical analysis, send you email or postal mail,
                provide customer support, or arrange for deliveries. All such
                third parties are prohibited from using your personal
                information except to provide these services to Zipper Learning
                LLC, and they are required to maintain the confidentiality of
                your information.
                <br />
                <br />
                Zipper Learning LLC may disclose your personal information,
                without notice, if required to do so by law or in the good faith
                belief that such action is necessary to: (a) conform to the
                edicts of the law or comply with legal process served on Zipper
                Learning LLC or the site; (b) protect and defend the rights or
                property of Zipper Learning LLC; and/or (c) act under exigent
                circumstances to protect the personal safety of users of Zipper
                Learning LLC, or the public.
              </Typography.Text>
              <br /> <br /> <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Tracking User Behavior
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Zipper Learning LLC may keep track of the websites and pages our
                users visit in order to determine which of our services are the
                most popular. This data is used to deliver customized content
                and advertising within Zipper Learning LLC to customers whose
                behavior indicates that they are interested in a particular
                subject area
              </Typography.Text>
              <br /> <br /> <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Automatically Collected Information
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Information about your computer hardware and software may be
                automatically collected by Zipper Learning LLC. This information
                can include: your IP address, browser type, domain names, access
                times and referring website addresses. This information is used
                for the operation of the service, to maintain quality of the
                service, and to provide general statistics regarding use of the
                Zipper Learning LLC website.
              </Typography.Text>
              <br /> <br /> <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Use of Cookies
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                The Zipper Learning LLC website may use "cookies" to help you
                personalize your online experience. A cookie is a text file that
                is placed on your hard disk by a web page server. Cookies cannot
                be used to run programs or deliver viruses to your computer.
                Cookies are uniquely assigned to you, and can only be read by a
                web server in the domain that issued the cookie to you.
                <br />
                <br />
                One of the primary purposes of cookies is to provide a
                convenience feature to save you time. The purpose of a cookie is
                to tell the Web server that you have returned to a specific
                page. For example, if you personalize Zipper Learning LLC pages,
                or register with our site or services, a cookie helps us to
                recall your specific information on subsequent visits. This
                simplifies the process of recording your personal information,
                such as billing addresses, shipping addresses, and so on. When
                you return to the same Zipper Learning LLC website, the
                information you previously provided can be retrieved, so you can
                easily use the features that you customized.
                <br />
                <br />
                You have the ability to accept or decline cookies. Most Web
                browsers automatically accept cookies, but you can usually
                modify your browser setting to decline cookies if you prefer. If
                you choose to decline cookies, you may be unable to fully
                experience the interactive features of the Zipper Learning LLC
                services or websites you visit.
              </Typography.Text>
              <br /> <br /> <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Links
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                This website contains links to other sites. Please be aware that
                we are not responsible for the content or privacy practices of
                such other sites. We encourage our users to be aware when they
                leave our site and to read the privacy statements of any other
                site that collects personally identifiable information.
              </Typography.Text>
              <br /> <br /> <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Right to Deletion
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Subject to certain exceptions set out below, on receipt of a
                verifiable request from you, we will:
              </Typography.Text>
              <ul>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Delete your personal information from our records
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Direct any service providers to delete your personal
                    information from their records.
                  </Typography.Text>
                </li>
              </ul>
              <br />
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Please note that we may be unable to comply with requests to
                delete your personal information if it is necessary to:{" "}
              </Typography.Text>
              <ul>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Complete the transaction for which the personal information
                    was collected, fulfill the terms of a written warranty or
                    product recall conducted in accordance with federal law,
                    provide a good or service requested by you, or reasonably
                    anticipated within the context of our ongoing business
                    relationship with you, or otherwise perform a contract
                    between you and us;
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Detect security incidents, protect against malicious,
                    deceptive, fraudulent, or illegal activity or prosecute
                    those responsible for that activity{" "}
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Debug to identify and repair errors that impair existing
                    intended functionality
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Exercise free speech, ensure the right of another consumer
                    to exercise his or her right of free speech, or exercise
                    another right provided for by law{" "}
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Comply with the Privacy Law of your State{" "}
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Engage in public or peer-reviewed scientific, historical, or
                    statistical research in the public interest that adheres to
                    all other applicable ethics and privacy laws, when our
                    deletion of the information is likely to render impossible
                    or seriously impair the achievement of such research,
                    provided we have obtained your informed consent{" "}
                  </Typography.Text>
                </li>

                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Enable solely internal uses that are reasonably aligned with
                    your expectations based on your relationship with us{" "}
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Comply with an existing legal obligation{" "}
                  </Typography.Text>
                </li>
                <li>
                  <Typography.Text
                    className="fontFamily1"
                    style={{
                      fontSize: "16px",
                      color: "grey",
                      textAlign: "left",
                    }}
                  >
                    Otherwise use your personal information, internally, in a
                    lawful manner that is compatible with the context in which
                    you provided the information{" "}
                  </Typography.Text>
                </li>
              </ul>
              <br />
              <br />
              <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Children Under Thirteen
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Zipper Learning LLC does not knowingly collect personally
                identifiable information from children under the age of
                thirteen. If you are under the age of thirteen, you must ask
                your parent or guardian for permission to use this website.{" "}
              </Typography.Text>
              <br />
              <br />
              <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                E-mail Communications
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                From time to time, Zipper Learning LLC may contact you via email
                for the purpose of providing announcements, promotional offers,
                alerts, confirmations, surveys, and/or other general
                communication.{" "}
              </Typography.Text>
              <br />
              <br />
              <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Changes to this Statement
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Zipper Learning LLC reserves the right to change this Privacy
                Policy from time to time. We will notify you about significant
                changes in the way we treat personal information by sending a
                notice to the primary email address specified in your account,
                by placing a prominent notice on our website, and/or by updating
                any privacy information. Your continued use of the website
                and/or Services available after such modifications will
                constitute your: (a) acknowledgment of the modified Privacy
                Policy; and (b) agreement to abide and be bound by that Policy.{" "}
              </Typography.Text>
              <br />
              <br />
              <br />
              <Typography.Title
                className="fontFamily1"
                style={{
                  fontSize: "25px",
                  fontWeight: 600,
                  color: "black",
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                Contact Information
              </Typography.Title>
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Zipper Learning LLC welcomes your questions or comments
                regarding this Statement of Privacy. If you believe that Zipper
                Learning LLC has not adhered to this Statement, please contact
                Zipper Learning LLC at:{" "}
              </Typography.Text>
              <br />
              <br />
              <Typography.Text
                className="fontFamily1"
                style={{ fontSize: "16px", color: "grey", textAlign: "left" }}
              >
                Zipper Learning LLC
                <br />
                3030 NW Expressway Suite 200 #126
                <br />
                OKC, Oklahoma 73112
                <br />
                Email Address: info@zipperlearning.com{" "}
              </Typography.Text>
              <br />
              <br />
              <Typography.Text
                className="fontFamily1"
                style={{
                  fontSize: "16px",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Effective as of March 04, 2023{" "}
              </Typography.Text>
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default PrivacyPolicy;
