import { Button } from 'antd'

const MainButton = (props) => {
    const { children, style, varient, className, onClick, type } = props
    const { height, ...rest } = style
    return varient === "outline" ? (
        <Button
            className={className}
            style={{
                background: "transparent",
                color: "#000",
                borderColor: "#000",
                borderRadius: 3,
                borderWidth: 2,
                height: height ? height : 40,
                ...rest
            }}
            onClick={onClick}
            type={type}
        >
            {children}
        </Button>
    ) : (
        <Button
            className={className}
            style={{
                background: "#ad0103",
                color: "white",
                borderColor: "#ad0103",
                borderRadius: 3,
                height: height ? height : 40,
                ...rest
            }}
            onClick={onClick}
            type={type}
        >
            {children}
        </Button>
    )
}

export default MainButton