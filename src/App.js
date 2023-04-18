import "./App.css";

import { useState } from "react";

function App() {
    const [firstName, setFirstName] = useState("");
    const [updateFirstName, setUpdateFirstName] = useState(firstName);
    const [lastName, setLastName] = useState("");
    const [updateLastName, setUpdateLastName] = useState(lastName);
    const [age, setAge] = useState("");
    const [updateAge, setUpdateAge] = useState(age);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [updatePhoneNumber, setUpdatePhoneNumber] = useState(phoneNumber);
    const [address, setAddress] = useState("");
    const [updateAddress, setUpdateAddress] = useState(address);

    const firstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const lastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const ageChange = (e) => {
        setAge(e.target.value);
    };

    const phoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const addressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleClick = () => {
        setUpdateAddress(address);
        setUpdatePhoneNumber(phoneNumber);
        setUpdateAge(age);
        setUpdateFirstName(firstName);
        setUpdateLastName(lastName);
    };

    return (
        <div className='App'>
            <div id='contactForm'>
                <h1>F O R M</h1>
                <form>
                    <input
                        className='inputs'
                        type='text'
                        id='firstName'
                        placeholder='First Name'
                        onChange={firstNameChange}
                        value={firstName}
                    />
                    <br />
                    <input
                        className='inputs'
                        type='text'
                        id='lastName'
                        placeholder='Last Name'
                        onChange={lastNameChange}
                        value={lastName}
                    />
                    <br />
                    <input
                        className='inputs'
                        type='text'
                        id='age'
                        placeholder='Age'
                        onChange={ageChange}
                        value={age}
                    />
                    <br />
                    <input
                        className='inputs'
                        type='text'
                        id='phoneNumber'
                        placeholder='Phone Number'
                        onChange={phoneNumberChange}
                        value={phoneNumber}
                    />
                    <br />
                    <input
                        className='inputs'
                        type='text'
                        id='address'
                        placeholder='Address'
                        onChange={addressChange}
                        value={address}
                    />
                    <br />
                </form>
                <button className='inputs' onClick={handleClick}>
                    Get ID Card!
                </button>
            </div>

            <div id='idCard'>
                <h2 id='idcardText'>I D - C A R D</h2>
                <img
                    className='imgs'
                    alt=''
                    src='http://www.iconninja.com/files/373/611/612/person-user-profile-male-man-avatar-account-icon.svg'
                />
                <p className='postText' id='postFullName'>
                    {updateFirstName} {updateLastName}
                </p>
                <p className='postText' id='postAge'>
                    Age: {updateAge}
                </p>
                <p className='postText' id='postPhoneNumber'>
                    Phone #: {updatePhoneNumber}
                </p>
                <p className='postText' id='postAddress'>
                    Address: {updateAddress}
                </p>
            </div>
        </div>
    );
}

export default App;
