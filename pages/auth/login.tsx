import FormCheckboxField from "@/components/form/FormCheckboxField";
import FormSubmitButton from "@/components/form/FormSubmitButton";
import FormInputField from "@/components/form/FormTextField";
import Link from "next/link";
import { FormEvent, ReactElement, useState } from "react";
import SignedOutLayout from "./SignedOutLayout";
import type {NextPageWithLayout} from "../_app";

const LoginPage: NextPageWithLayout = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        keepLoggedIn: false
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData(prev => (
            { ...prev, [e.target.name]: e.target.value }
        ));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Submitting");
        console.log(formData);
    }

    function toggleCheckbox() {
        setFormData(prev => (
            { ...prev, "keepLoggedIn": !formData.keepLoggedIn }
        ));
    }

    return (
        <div className="container mx-auto">
            <div className="max-w-md mx-auto rounded bg-white shadow px-10 py-3">
                <h2 className="text-2xl text-stone-700 my-3 font-bold text-center">Log in to Buzznote</h2>
                <p className="mb-15 text-center">Need a Buzznote Account? <Link href="/auth/register" className="underline pl-2">Create an Account</Link></p>

                <form onSubmit={handleSubmit}>
                    <FormInputField name="username" value={formData.username} title="Username or Email" onInputChange={handleChange} />
                    <FormInputField name="password" value={formData.password} title="Password" onInputChange={handleChange} />
                    <FormCheckboxField name="status" title="Keep me Logged In" checked={formData.keepLoggedIn} onInputChange={toggleCheckbox} />
                    <FormSubmitButton text="Login" />
                </form>
            </div>
        </div>
    )
}

LoginPage.getLayout = (page: ReactElement) => <SignedOutLayout>{page}</SignedOutLayout>

export default LoginPage;