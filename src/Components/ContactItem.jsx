import { Row, Col } from "react-bootstrap";

const ContactItem = ({item}) => {
    return (
        <>
            <Row>
                <Col lg={2}>
                    <img
                    width={50}
                    src="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjhfMjE3/MDAxNTgyODc5NDMwMTg0.Y4dvb1R-upePHEp06fJNf4gbYm3JZYLO6EHCsLXxWuAg.7ED3W1YQVLJSQAX-Q_UdZg4MEw_aERSnmDFH7otsY_Ag.JPEG.wlgus2155/IMG_5470.JPG?type=w800" alt=""
                    />
                </Col>
                <Col lg={10}>
                    <div>
                        {item.name}
                    </div>
                    <div>
                        {item.phoneNumber}
                    </div>
                </Col>
            </Row>
        </>
    );
}
 
export default ContactItem;