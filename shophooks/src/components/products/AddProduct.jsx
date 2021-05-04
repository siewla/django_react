import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

function AddProduct({ products, addProducts }) {
  let schema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required().min(1),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      //   console.log(values);
      let product = {
        id: products[products.length - 1].id + 1,
        name: values.name,
        price: Number(values.price),
      };
      addProducts((prevState) => [...prevState, product]);
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Form.Control
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.errors.name}
          {/* {formik.errors.name ? formik.errors.name : null } */}
        </Row>
        <Row>
          <Form.Control
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          {formik.errors.price && (
            <div className="text-danger">{formik.errors.price}</div>
          )}
        </Row>
        <Button type="submit">Add Product</Button>
      </form>
    </Container>
  );
}

export default AddProduct;
