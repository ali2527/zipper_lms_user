import { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import MainButton from '../MainButton'
import { Row, Col, Typography } from "antd"

const ThemeSection = ({ title, subtitle, extra, action, sectionStyle, containerStyle }) => {
    const [loadCount, setLoadCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0
    });
    useEffect(() => {
        setLoadCount(loadCount + 1);
    }, [inView])

    return (
        <Row style={{ alignItems: "center", padding: "50px 0", background: "#fff5ef", ...sectionStyle }} justify="space-evenly">
            <Col span={20} style={{ ...containerStyle }}>
                <div style={{ textAlign: "center" }} ref={ref} className={(inView && loadCount < 3) ? "zoom-in" : ""}>
                    {title && (
                        <Typography.Title style={{ color: "#ad0103", fontSize: 36, fontWeight: 600 }}>
                            {title}
                        </Typography.Title>
                    )}
                    {subtitle && (
                        <Typography.Title style={{ color: "#5f5f5f ", fontSize: 20, fontWeight: 400, marginTop: 0 }}>
                            {subtitle}
                        </Typography.Title>
                    )}
                    {extra}
                    {action && (
                        <MainButton
                            varient={"outline"}
                            style={{
                                fontSize: 16,
                                marginTop: 15,
                                padding: "10px 20px",
                                height: "auto",
                                fontWeight: 500,
                                borderRadius: 0,
                                borderColor: "rgba(255,255,255,.5)",
                                color: "white"
                            }}
                            onClick={action.click}
                        >
                            {action.text}
                        </MainButton>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default ThemeSection