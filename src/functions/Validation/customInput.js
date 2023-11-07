import { useField } from "formik";
import {MDBInput} from "mdb-react-ui-kit";
import "./validation.css";

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <MDBInput wrapperClass='mb-4' label={label} size="lg"
                      {...field}
                      {...props}
                      className={meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};
export default CustomInput;