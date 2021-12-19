import { Card,Button } from "react-bootstrap"
import BasicButtons from "../Button/Button"

export default function MyCard({IMG,title,btn_title,text}) {
    return (
        <Card style={{ width: '18rem',textAlign:"center",margin:"0 auto" }}>
            <Card.Img variant="top" src={IMG} />
            <Card.Body >
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text} 
                </Card.Text>
                {/* <Button variant="primary">{btn_title}</Button> */}
                <BasicButtons>{btn_title}</BasicButtons>
            </Card.Body>
        </Card>
    )
}