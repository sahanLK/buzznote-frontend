import FormSubmitButton from "@/components/form/FormSubmitButton";
import FormTextField from "@/components/form/FormTextField";
import React, { FormEvent, useState } from "react";


export default function CreateCampaign() {

    const [formData, setFormData] = useState({
        title: '',
        senderName: '',
        senderEmail: '',
        body: ''
    });

    function onFormChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log("FormData: ", formData);

        fetch("http://localhost:8083/api/campaign/create", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then(res => {
            if (res.status == 201) {
                console.log("Campaign created successfully!!");
            }
            console.log(res.json());
        });
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl text-stone-600 mb-10 mt-5">Campaign Info</h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <FormTextField name="title" title="Campaign name" value={formData.title} onInputChange={onFormChange} />
                <FormTextField name="senderName" title="Sender Name" value={formData.senderName} onInputChange={onFormChange} />
                <FormTextField name="senderEmail" title="Sender Email" value={formData.senderEmail} onInputChange={onFormChange} />
                <FormTextField name="body" title="Message" value={formData.body} onInputChange={onFormChange} />

                <FormSubmitButton text="Create Campaign" />
            </form>
        </div>
    )
}