"use client"

import FormGeneric from "../components/formGenerinc/page"


const formFields = [
    {
        label: "Numero",
        name: "userNumber",
        type: "number",
    },
    {
        label: "Titulo",
        name: "userTittle",
        type: "text",
    },
];
const initialFormState = {
    userNumber: "",
    userTittle: "",
};
const FormChapter = () => {


    const handleChapter = () => {

    }
    return (
        <>
            <FormGeneric
                fields={formFields}
                initialState={initialFormState}
                onSubmit={handleChapter} />
        </>
    )
}

export default FormChapter