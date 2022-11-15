import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
    const contactList = useSelector((state) => state.contactList);

    return (
        <>
            <SearchBox></SearchBox>
            {contactList ? (
                contactList.map((item) => <ContactItem item={item}></ContactItem>)
            ) : ""}
        </>
    );
}
 
export default ContactList;