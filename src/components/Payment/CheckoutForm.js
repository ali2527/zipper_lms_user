import React, { useState,useEffect } from "react";
import { useStripe, useElements, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
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



const CheckoutForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  const stripe = useStripe();
  const authToken = useSelector((state) => state.user.userToken);
  const elements = useElements();
  const [lesson, setLesson] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLessonDetails();
  }, []);

  const getLessonDetails = async () => {
    try {
      const response = await Get(LESSON.getLessonById + id, authToken);

      console.log("response", response);
      if (response?.status) {
        setLesson(response?.data?.lesson);
      } else {
        swal("Error", response?.data?.message, "error");
      }
    } catch (error) {
      console.log(error.message);
     
    }
  };



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
        let data={lesson:id,stripeToken:token}
        
    Post(PAYMENT.lessonPayment, data,authToken)
    .then((response) => {
      setLoading(false);
      console.log("response", response.data);
      if (response?.data?.status) {

       swal("Success!", response?.data?.message ||  response?.response?.data?.message, "success");
       navigate("/dashboard")
      } else {
        swal("Oops!", response?.data?.message ||  response?.response?.data?.message, "error");
      }
    })
    .catch((e) => {
      console.log(":::;", e);
      setLoading(false);
    });

      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setIsLoading(false);
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
          Card Expiry
          </Typography.Title>
            <label>
          <CardExpiryElement />
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
           
        </Row>
        <br/>
      <button type="submit"  className="loginButton" style={{border:"none"}} disabled={isLoading}>
        {isLoading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;