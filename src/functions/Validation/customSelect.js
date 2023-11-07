import { useField } from "formik";
import "./validation.css";
import { Field } from "formik";

const CustomSelect = ({ label, options, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>{label}</label>
            <div>
                {options.map((option) => (
                    <label key={option.value}>
                        <Field
                            type="radio"
                            name={field.name}
                            value={option.value}
                            checked={field.value === option.value}
                        />
                        {option.label}
                    </label>
                ))}
            </div>
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};

export default CustomSelect;