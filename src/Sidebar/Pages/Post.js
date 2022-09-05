import React from "react";
import SideNav from "../SideNav";
import { Form } from "react-bootstrap";

const Post = () => {
  return (
    <>
      <SideNav />
      <div className="container">
        <h1>
          <center> welcome </center>
        </h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Title of the post </Form.Label>
            <Form.Control type="email" placeholder="Select for..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label> Post About </Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>
        </Form>
        <button className="btn btn-primary" type="submit">
          Share Post
        </button>
      </div>
    </>
  );
};

export default Post;
