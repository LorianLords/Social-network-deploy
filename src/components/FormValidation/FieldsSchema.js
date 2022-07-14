import * as Yup from "yup";

const TextareaSchema = Yup.object().shape({
    textareaBody: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Must be longer than 2 characters")
        //максимальная длина - 20 символов
        .max(30, "Nice try, nobody has a first name that long")
        .required("Required")
});
export default TextareaSchema;