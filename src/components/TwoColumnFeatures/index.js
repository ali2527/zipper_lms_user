import { Row, Col, Typography } from "antd"
import { useRouter } from 'next/router';
import { Image } from "antd";

const TwoColSection = () => {
  const router = useRouter()
    return (
      <Row>
        <Col
          xs={24}
          md={12}
          style={{
            background: `url("/images/red_bg.webp")`,
            backgroundSize: "cover",
            padding: "50px 0",
            display: "flex",
            flexDirection:'column',
            texAlign:'center',
            justifyContent:'center',
          }}
        >
          <Typography.Title
          level={3}
            style={{
              fontSize: 25,
              color: "#fff",
              textAlign: "center",
              margin: "5px",
            }}
          >
            Professional Logo Design By Type
          </Typography.Title>
          <br/>
          <Row style={{justifyContent:'center'}}>
            <Col xs={24} md={20} >
              <Row style={{justifyContent:'center'}}>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/monogram-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/monogram.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Monogram</p>
                </Col>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/wordmark-logo-design")}>
                      <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/wordmark.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Word Mark</p>
                </Col>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/emblem-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/emblem.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Emblem</p>
                </Col>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/illustrative-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/illustrative.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Illustrative</p>
                </Col>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/mascot-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/mascot.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Mascot</p>
                </Col>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/pictorial-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/pictorial.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Pictorial</p>
                </Col>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/calligraphy-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/calligraphy.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Calligraphy</p>
                </Col>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/corporate-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/corporate.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Corporate</p>
                </Col>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/abstract-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/abstract.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Abstract</p>
                </Col>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/combination-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/combination.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Combination</p>
                </Col>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/animated-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/animated.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Animated</p>
                </Col>
                <Col xs={8} md={8} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/3d-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/3d.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>3D</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          xs={24}
          md={12}
          style={{
            background: `url("/images/blue_bg.webp")`,
            backgroundSize: "cover",
            padding: "50px 0",
            display: "flex",
            flexDirection:'column',
            texAlign:'center',
            justifyContent:'center',
          }}
        >
          <Typography.Title
          level={3}
            style={{
              fontSize: 25,
              color: "#fff",
              textAlign: "center",
              margin: "5px 0",
              fontWeight: 700,
            }}
          >
            Logo Design By Industry
          </Typography.Title>
          <br/>
            <Row style={{justifyContent:'center'}}>
            <Col xs={24} md={20} >
              <Row style={{justifyContent:'center'}}>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/medical-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/medical.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Medical</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/restaurant-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/restaurant.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Restaurant</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/e-commerce-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/ecommerce.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>E-commerce</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/drug-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/drug.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Drug</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/entertainment-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/entertainment.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Entertainment</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/dental-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/dental.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Dental</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/automobile-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/automotive.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Automobile</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/food-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/food.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Food</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/education-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/education.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Education</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/film-and-studio-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/film.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Film & Studio</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/construction-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/construction.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Construction</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/photography-logo-design")}>
                 
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/photography.webp"
              /> <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Photography</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/finance-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/finance.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Financial</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/clothing-logo-design")}>
                  
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/clothing.webp"
              /><p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Clothing</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/art-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/art.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Art</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/business-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/business.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Business</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/garments-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/garment.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Garments</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/consulting-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/consultancy.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Consulting</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/hotel-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/hotel.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Hotels</p>
                </Col>
                <Col xs={8} md={6} style={{justifyContent:'center',alignItems:'center', textAlign:'center',cursor:'pointer'}} onClick={()=>router.push("/law-logo-design")}>
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={30}
                height={30}
                src="/images/law.webp"
              />
                  <p style={{textAlign:'center',fontWeight:'bold', color:'white' , marginBottom:'20px'}}>Law</p>
                </Col>
                <Col xs={8} md={6}/>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
}

export default TwoColSection