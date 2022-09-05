import React from "react";
import Form from "react-bootstrap/Form";
const AdminNotifications = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="forms pt-5">
          <div className="title ">
            <h1>Notifications</h1>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Title </Form.Label>
              <Form.Control type="text" placeholder="title" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> Descriptions </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AdminNotifications;
