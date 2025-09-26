import Contactitem from "@/components/contacts/ContactItem";
import { useEffect, useState } from "react";

type ContactItem = {
    id: string,
    name: string
}

export default function AudiencePage() {
    const [contacts, setContacts] = useState([]);
    const [contactPage, setContactpage] = useState();
    const [hasNext, setHasNext] = useState();
    const [hasPrev, setHasPrev] = useState();
    const [totalPages, setTotalPages] = useState();


    useEffect(() => {
        fetch(`http://localhost:8083/api/contacts/list?size=4&page=${contactPage}`, {
            credentials: "include",
        })
            .then(res => res.json())
            .then(respDada => {
                console.log(respDada);
                setContacts(respDada.data);
                setHasNext(respDada.more);
                setHasPrev(respDada.previous);
                setTotalPages(respDada.totalPages);
            })
    }, [contactPage]);

    return (
        <>
            {contacts.map((contact: ContactItem) => (
                <Contactitem key={contact.id} contact={contact.name} />
            ))}
        </>
    )
}