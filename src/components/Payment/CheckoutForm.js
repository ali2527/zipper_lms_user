import React, { useState,useEffect } from "react";
import { useStripe, useElements,   PaymentElement, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import {
    Col,
    Button,
    Row,
    Avatar,
    Typography,
    Layout,
    Checkbox,
    Rate,
    Progress,
    Image,
    Card,
    Form,
    Spin,
    Input,
    Select,
    InputNumber,
    TimePicker,
  } from "antd";
import swal from "sweetalert";
import { LESSON, PAYMENT, USERS } from "../../config/constants/api";
import { Get } from "../../config/api/get";
import { Post } from "../../config/api/post";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";



const CheckoutForm = ({type}) => {
    const { id } = useParams();
    const navigate = useNavigate();
  const stripe = useStripe();
  const authToken = useSelector((state) => state.user.userToken);
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);





  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      const { token, error } = await stripe.createToken(elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement));

      if (error) {
       swal("Error",error.message,"error")
        // Handle the error (e.g., display an error message to the user).
      } else {

        if(type && type == "COURSE") {
          let data={course:id,stripeToken:token}
        
          Post(PAYMENT.coursePayment, data,authToken)
          .then((response) => {
            
            console.log("response", response.data);
            if (response?.data?.status) {
              setIsLoading(false);
      
             swal("Success!", response?.data?.message ||  response?.response?.data?.message, "success");
             navigate("/dashboard")
            } else {
              
              swal("Oops!", response?.data?.message ||  response?.response?.data?.message, "error");
            }
            setIsLoading(false);
          })
          .catch((e) => {
            console.log(":::;", e);
            setIsLoading(false);
          });
        }else{
          let data={lesson:id,stripeToken:token}
        
          Post(PAYMENT.lessonPayment, data,authToken)
          .then((response) => {
            
            console.log("response", response.data);
            if (response?.data?.status) {
              setIsLoading(false);
             swal("Success!", response?.data?.message ||  response?.response?.data?.message, "success");
             navigate("/dashboard")
            } else {
              swal("Oops!", response?.data?.message ||  response?.response?.data?.message, "error");
            }
            setIsLoading(false);
          })
          .catch((e) => {
            console.log(":::;", e);
            setIsLoading(false);
          });
        }
       

      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <Row gutter={20}>
            <Col xs={24} md={12}>

          <Typography.Title
                        className="fontFamily1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "black",
                          textAlign: "left",
                          marginTop: 0,
                        }}
                      >
                       Card Number
                      </Typography.Title>
            <label>
          <CardNumberElement />
        </label>
            </Col>
            <Col xs={24} md={12}>
            <Typography.Title
          level={3}
          className="fontFamily1"
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "black",
            textAlign: "left",
            marginTop: 0,
          }}
          >
          Expiration Date
          </Typography.Title>
            <label>
          <CardExpiryElement />

          {/* <PaymentElement/> */}
        </label>
            </Col>
        </Row>
        <br/>
        <Row gutter={20}>
            <Col xs={24} md={12}>
            <Typography.Title
          level={3}
          className="fontFamily1"
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "black",
            textAlign: "left",
            marginTop: 0,
          }}
          >
          CVC
          </Typography.Title>
            <label>
          <CardCvcElement />
        </label>
            </Col>
            <Col xs={24} md={12} style={{display:'flex', justifyContent:'flex-start', alignItems:'flex-end'}}>
              <Image src="/images/cards1.png" preview={false} height={58} /><Image src="/images/cards2.png" preview={false} height={58} />

            </Col>

           
        </Row>
        <br/>
      <button type="submit"  className="loginButton" style={{border:"none"}} disabled={isLoading}>
        {isLoading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;