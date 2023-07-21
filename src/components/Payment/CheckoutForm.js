import { useContext, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Post } from "../../config/api"
import Link from "next/link"
import { Divider, Typography, Row, Col, Form, Input, List, message, Spin } from "antd"
import { CHECKOUT,PORTFOLIO } from "../../config/constants/api"
import CardSection from './CardSection';
import UserContext from '../../config/context/user/UserContext';
import { useRouter } from 'next/router';
import { LoadingOutlined } from '@ant-design/icons'

export default function CheckoutForm({ plan, planData }) {
    const router = useRouter()
    const antIcon = (
        <LoadingOutlined
            style={{
                color: "#fff",
                fontSize: 24,
            }}
            spin
        />
    );
    const { user, token } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        description: "",
    })
    const stripeTokenHandler = async (stripeToken) => {
        const paymentData = {
            ...formData,
            stripeToken: stripeToken.id,
            plan: planData?._id
        };
        try {
            Post(CHECKOUT.post, paymentData, token)
                .then((response) => {
                    console.log("response",response)
                    setLoading(false)
                    if (response.status) {
                        console.log(response,"response")
                        message.success("Payment Successful")
                        if(planData?.category?._id == PORTFOLIO?.categroy?.Home || planData?.category?._id == PORTFOLIO?.categroy?.Mascot || planData?.category?._id == PORTFOLIO?.categroy?.Corporate || planData?.category?._id == PORTFOLIO?.categroy?.Animated || planData?.category?._id == PORTFOLIO?.categroy?.ThreeDLogo || planData?.category?._id == PORTFOLIO?.categroy?.LogoDesign2){
                        router.push(`/requirement-form?id=${response?.data?._id}`)
                        }else{
                        
                            router.push(`/thankyou-order`)
                        }
                    }
                    else {
                        message.error(response.message ? response.message : "Something went wrong")
                    }
                })
                .catch((error) => {
                    setLoading(false)
                
                    message.error(error.response.data.message ? error.response.data.message : "Something went wrong")
                })
        } catch (error) {
            setLoading(false)
            message.error(error.message ? error.message : "Something went wrong")
        }
    }

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        setLoading(true)
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make  sure to disable form submission until Stripe.js has loaded.
            setLoading(false)
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            // Show error to your customer.
            setLoading(false)
            console.log(result.error.message);
        } else {
            // Send the token to your server.
            // This function does not exist yet; we will define it in the next step.
            stripeTokenHandler(result.token);
        }
    };

    console.log("planData", planData)

    return (
        <Row style={{ padding: 20, justifyContent: "center" }}>
            <Col xs={24} md={16} style={{ marginTop: 10 }}>
                <Typography.Title style={{ fontWeight: 600, fontSize: 22 }}>Customer Information</Typography.Title>
            </Col>
            <Col xs={24} md={16}>
                <Typography.Text style={{ fontSize: 16, fontWeight: 400, color: "#464646" }}>Name<span style={{ color: "red" }}>*</span></Typography.Text>
                <Form.Item
                    name="Name"
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input
                        value={formData?.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                            borderRadius: 5,
                            height: 42,
                            background: "#efefef",
                            boxShadow: "none",
                            borderColor: "lightgrey",
                            margin: "5px 0 0"
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={16}>
                <Typography.Text style={{ fontSize: 16, fontWeight: 400, color: "#464646" }}>Company name (optional)</Typography.Text>
                <Form.Item
                    name="company"
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input
                        value={formData?.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                            borderRadius: 5,
                            height: 42,
                            background: "#efefef",
                            boxShadow: "none",
                            borderColor: "lightgrey",
                            margin: "5px 0 0"
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={16}>
                <Typography.Text style={{ fontSize: 16, fontWeight: 400, color: "#464646" }}>Phone<span style={{ color: "red" }}>*</span></Typography.Text>
                <Form.Item
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input
                        value={formData?.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                            borderRadius: 5,
                            height: 42,
                            background: "#efefef",
                            boxShadow: "none",
                            borderColor: "lightgrey",
                            margin: "5px 0 0"
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={16}>
                <Typography.Text style={{ fontSize: 16, fontWeight: 400, color: "#464646" }}>Email<span style={{ color: "red" }}>*</span></Typography.Text>
                <Form.Item
                    name="email"
                    value={formData?.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    rules={[
                        {
                            required: true,
                            message: 'This field is required!',
                        },
                    ]}
                >
                    <Input
                        style={{
                            borderRadius: 5,
                            height: 42,
                            background: "#efefef",
                            boxShadow: "none",
                            borderColor: "lightgrey",
                            margin: "5px 0 0"
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={16}>
                <Divider />
            </Col>

            <Col xs={24} md={16} style={{ background: "#f8f8f8", padding: 15 }}>
                <Typography.Title style={{ fontWeight: 600, fontSize: 22, textAlign: "center", padding: "10px 0" }}>Your Order</Typography.Title>
                <div style={{ background: "#fff", padding: 20, borderRadius: 5 }}>
                    <List size="small">
                    <List.Item style={{ fontSize: 16, color: "#777", padding: "16px", textAlign: "left" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                <Typography.Text style={{ fontSize: 14, fontWeight: 600, color: "#2d2a2a" }}>Category</Typography.Text>
                                <Typography.Text style={{ fontSize: 14, fontWeight: 600, color: "#ad0103" }}>{planData?.category?.name}</Typography.Text>
                            </div>
                        </List.Item>
                        <List.Item style={{ fontSize: 16, color: "#777", padding: "16px", textAlign: "left" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                <Typography.Text style={{ fontSize: 14, fontWeight: 600, color: "#2d2a2a" }}>Package</Typography.Text>
                                <Typography.Text style={{ fontSize: 14, fontWeight: 600, color: "#ad0103" }}>{planData?.name}</Typography.Text>
                            </div>
                        </List.Item>
                        <List.Item style={{ fontSize: 16, color: "#777", padding: "16px", textAlign: "left" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                <Typography.Text style={{ fontSize: 14, fontWeight: 600, color: "#2d2a2a" }}>Subtotal</Typography.Text>
                                <Typography.Text style={{ fontSize: 14, fontWeight: 600, color: "#ad0103" }}>${planData?.price}.00</Typography.Text>
                            </div>
                        </List.Item>
                        <List.Item style={{ fontSize: 16, color: "#777", padding: "16px", textAlign: "left" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                <Typography.Text style={{ fontSize: 14, fontWeight: 600, color: "#2d2a2a" }}>Discount</Typography.Text>
                                <Typography.Text style={{ fontSize: 14, fontWeight: 600, color: "#ad0103" }}>- ${planData?.discountValue}.00 ({planData?.discount} %) </Typography.Text>
                            </div>
                        </List.Item>
                        
                        <List.Item style={{ fontSize: 16, color: "#777", padding: "16px", textAlign: "left" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                <Typography.Text style={{ fontSize: 18, fontWeight: 600, color: "#2d2a2a" }}>Total</Typography.Text>
                                <Typography.Text style={{ fontSize: 22, fontWeight: 600, color: "#061a61" }}>${planData?.discountedPrice}.00</Typography.Text>
                            </div>
                        </List.Item>
                    </List>
                </div>
                <Typography.Title style={{ fontWeight: 400, fontSize: 15, padding: "10px 0" }}>Credit Card (Stripe)</Typography.Title>
                <div style={{ background: "#fff", padding: 20, borderRadius: 5 }}>
                    <Typography.Title style={{ fontWeight: 400, fontSize: 15, padding: "10px 0" }}>Pay with your credit card via Stripe.</Typography.Title>
                    <form onSubmit={handleSubmit}>
                        <CardSection planData={planData} />
                        <Divider />
                        <Typography.Text style={{ fontSize: 16, color: "#414141" }}>
                            Your personal data will be used to process your order, support your experience throughout
                            this website, and for other purposes described in our{" "}
                            <Link href={"/"}><a style={{ fontSize: 16, fontWeight: 600, color: "#3f3f3f" }}>privacy policy</a></Link> .
                        </Typography.Text>
                        <button
                            className="ant-btn"
                            disabled={!stripe || loading}
                            style={{
                                background: (!stripe || loading) ? "rgba(39,61,169,0.5)" : "#273da9",
                                color: "#fff",
                                borderColor: (!stripe || loading) ? "rgba(39,61,169,0.5)" : "#273da9",
                                borderRadius: "0px",
                                height: "40px",
                                width: "100%",
                                marginTop: "35px",
                            }}
                        >
                            {loading ? (<Spin indicator={antIcon} />) : "Place Order"}
                        </button>
                    </form >
                </div>
            </Col>
        </Row>

    );
}