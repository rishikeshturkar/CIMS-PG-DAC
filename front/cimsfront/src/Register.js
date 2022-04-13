
import React, { useState } from "react";

import { Form,Button,Row,Col} from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import userService from "./services/userService";

export default function Register () {
    
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [role,setRole] = useState("");
        const [message,setMessage] =useState("");
        let history=useHistory();

        function handleSubmit(event) {
            event.preventDefault();
            
            let user={name:name,email:email,password:password,role:role};
            userService.addUser(user).then((result)=>{
            console.log(result.data);
            history.push("/")
          });
        }

        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Form.Label column sm={2}>
                Name
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Name" value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalConfirmPassword">
                <Form.Label column sm={2}>
                Confirm Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Confirm Password" 
                onChange={(e) => setMessage((password===e.target.value)?"":"Password Mismatch")} />
                <p>{message}</p>
                </Col>
            </Form.Group>
            <fieldset>
                <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                    Role
                </Form.Label>
                <Col sm={10}>
                    <Form.Check
                    type="radio"
                    label="STUDENT"
                    name="role"
                    id="student"
                    value={role}
                    onChange={(e) => setRole("STUDENT")}
                    />
                    <Form.Check
                    type="radio"
                    label="FACULTY"
                    name="role"
                    id="faculty"
                    value={role}
                    onChange={(e) => setRole("FACULTY")}
                    />
                </Col>
                </Form.Group>
            </fieldset>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Register</Button>
                </Col>
            </Form.Group>
            </Form>
        );
}