import logo from './logo.svg';
import './App.css';

import { Container, Row, Col } from "react-bootstrap";

import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';

/* 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처와 검색 창이 있다.
2. 리스트에 이름과 번호를 등록할 수 있다.
3. 리스트에 아이템이 몇 개 있는지 보인다.
4. 사용자가 유저를 이름 검색으로 찾을 수 있다. */

function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm></ContactForm>
          </Col>
          <Col>
            <ContactList></ContactList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
