import { Link, useHistory } from 'react-router-dom'
import { signInWithEmailAndPassword, auth , onAuthStateChanged} from '../../confiq/Firebase';
import "./css/style.css"
import Swal from "sweetalert2"
import { BasicButtons, MyInputText } from "../../components"
import { useState } from "react";
import { Formik, Form, useField, Field } from 'formik';
import * as Yup from 'yup';

let Login = () => {
    const [errorMsg, setErrorMsg] = useState(false);
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            history.push('/pendingrequest')
        } else {
        }
    });
    const Sigma = Yup.object({
        email: Yup.string()
        .email('Invalid email')
        .required('Required'),
        password: Yup.string()
            .required('No password provided')
            .min(6, 'Password is too short - should be 6 chars minimum.')

    })
    return (
        <>
            <div className="myContainer">
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}

                    validationSchema={Sigma}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setLoading(true)
                            signInWithEmailAndPassword(auth, values.email, values.password)
                                .then((res) => {
                                    setLoading(false)
                                    Swal.fire(
                                        'Sign In!',
                                        'User as been sign in successfully!',
                                        'success'
                                    )
                                    history.push('/users')
                                })
                                .catch((error) => {
                                    setErrorMsg(error.message)
                                })
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Form submit={handleSubmit}>
                            <div className="inputs_fields mt-20">
                                <MyInputText
                                    type="email"
                                    fullWidth={true}
                                    label="Email"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    error={errors.email && touched.email ? true : false}
                                    helperText={errors.email && touched.email ? errors.email : null}
                                />
                            </div>
                            <div className="inputs_fields mt-20">
                                <MyInputText
                                    type="password"
                                    fullWidth={true}
                                    label="Password"
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    error={errors.password && touched.password ? true : false}
                                    helperText={errors.password && touched.password ? errors.password : null}
                                />
                            </div>
                            <div className="myBtn mt-20">
                                {errorMsg ? <div className="error">User does not exist or Invalid email or password</div> : null}
                                <BasicButtons type="submit" variant="contained" disabled={isSubmitting} fullWidth="true" >{loading ? "Loading..." : "Login"}</BasicButtons>
                            </div>


                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Login;