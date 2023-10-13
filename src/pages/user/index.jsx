import React, { useEffect, useState } from 'react';
import './index.css';
import Account from '../../components/account';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileData } from '../../store';

function User() {
    const profileStore = useSelector((state) => state.connectUser);
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(profileStore.firstName);
    const [lastName, setLastName] = useState(profileStore.lastName);
    const dispatch = useDispatch();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function handleEditClick() {
        setIsEditing(true);
    }

    function handleSaveEdited() {
        let updatedFirstName =
            firstName.length === 0 ? profileStore.firstName : firstName;
        let updatedLastName =
            lastName.length === 0 ? profileStore.lastName : lastName;

        dispatch(
            setProfileData({
                firstName: updatedFirstName,
                lastName: updatedLastName,
            })
        );
        setIsEditing(false);
    }

    function handleCancelEdited() {
        setIsEditing(false);
        setFirstName(profileStore.firstName);
        setLastName(profileStore.lastName);
    }

    useEffect(() => {
        const isAuthenticated = profileStore.token ? true : false;
        if (!isAuthenticated) {
            window.location.href = '/sign-in';
        }
    }, [profileStore.token]);

    return (
        <main id="main-user">
            <div className="top-container">
                <p>
                    Welcome back{' '}
                    {isEditing
                        ? null
                        : `${profileStore.firstName} ${profileStore.lastName}`}
                </p>
                {!isEditing && (
                    <button className="edit-button" onClick={handleEditClick}>
                        Edit Name
                    </button>
                )}
            </div>
            {isEditing && (
                <div className="edit-board">
                    <form className="edit-form">
                        <div className="input-bloc-edit">
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) =>
                                    setFirstName(
                                        capitalizeFirstLetter(e.target.value)
                                    )
                                }
                            />
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) =>
                                    setLastName(
                                        capitalizeFirstLetter(e.target.value)
                                    )
                                }
                            />
                        </div>
                        <div className="button-bloc-edit">
                            <button
                                type="button"
                                className="save-button"
                                onClick={handleSaveEdited}
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="cancel-button"
                                onClick={handleCancelEdited}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <div className="component-container">
                <Account
                    texteTitle="Argent Bank Checking (x8349)"
                    amount="$2,082.79"
                />
                <Account
                    texteTitle="Argent Bank Savings (x6712)"
                    amount="$10,928.42"
                />
                <Account
                    texteTitle="Argent Bank Credit Card (x8349)"
                    amount="$184.30"
                />
            </div>
        </main>
    );
}

export default User;
