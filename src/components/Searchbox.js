import React from "react";
import Feature from "./Feature";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
export default function Searchbox() {
  const validationSchema = Yup.object({
    code: Yup.string().required(),
  });

  const initialValues = {
    code: "",
  };
  let renderError = (message) => <p className="help is-danger">{message}</p>;

  let navigate = useNavigate();
  const onSubmit = (values) => {
    if (values.code === "123456") {
      // alert(JSON.stringify(values, null, 2));
      navigate("./shop");
    } else {
      alert("Incorrect code entered");
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();
        }}
      >
        <Form action="./shop">
          <div className="field">
            <div className="control searchbox">
              <Field
                name="code"
                type="text"
                className="input"
                placeholder="add the code here"
              />
              <ErrorMessage name="name" render={renderError} />
            </div>
          </div>
        </Form>
      </Formik>
      <div className="row">
        <p>
          <p></p>
          <a href="./" className="text-white">
            New to Sensvio?
          </a>
        </p>
      </div>
      <Feature />
    </div>
  );
}
