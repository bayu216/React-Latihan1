import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

export default function UbahMember() {
  return (
    <>
      Ubah Member
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      ></Form>
    </>
  );
}
