import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
    const contactList = useSelector((state) => state.contactList);
    const dispatch = useDispatch();
    const [word, setWord] = useState("");

    const search = () => {
        dispatch({type: "SEARCH", payload: {word: word}});
    }

    return (
        <>
            <Row>
                <Col lg={10}>
                    <Form.Control type="text" placeholder="이름을 입력해주세요" 
                    onChange={(event) => setWord(event.target.value)}></Form.Control>
                </Col>
                <Col lg={2}>
                    <Button onClick={() => {search()}}>찾기</Button>
                </Col>
            </Row>
        </>
    );
}
 
export default SearchBox;