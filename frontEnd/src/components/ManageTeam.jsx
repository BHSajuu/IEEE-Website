import React, { useState } from "react";
import {members} from "../utility/TeamData";

function ManageTeam() {
    // Initialize the teamMembers state with the imported members data
    const [teamMembers, setTeamMembers] = useState(members);

    const [newMember, setNewMember] = useState({ name: "", role: "", year: "", image: "", link: "" });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setNewMember({ ...newMember, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddMember = () => {
        if (newMember.name && newMember.role) {
            const updatedMembers = [
                ...teamMembers,
                { id: Date.now(), ...newMember },  // Adding new member with a unique ID
            ];
            setTeamMembers(updatedMembers);
            // Also updating the external 'members' array
            // (This assumes that 'members' can be mutated, otherwise you may need to handle this outside the component)
            members.push({ id: Date.now(), ...newMember });
            setNewMember({ name: "", role: "", year: "", image: "", link: "" });
        } else {
            alert("Please fill out all required fields!");
        }
    };

    const handleRemoveMember = (id) => {
        const updatedMembers = teamMembers.filter((member) => member.id !== id);
        setTeamMembers(updatedMembers);
        // Remove member from the external 'members' array
        const index = members.findIndex((member) => member.id === id);
        if (index > -1) {
            members.splice(index, 1);
        }
    };

    return (
        <div className="bg-white shadow rounded p-4 sm:max-h-screen overflow-y-auto ">
            <div className="flex flex-col justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Manage Team Members</h2>
                <div className="mb-4">
                    <p className="text-gray-700">
                        Total Team Members: <strong>{teamMembers.length}</strong>
                    </p>
                </div>
                <a href="/team" className="text-blue-500 hover:underline">
                    Show More
                </a>
            </div>

            <div className="mb-6">
                <h3 className="text-md font-semibold mb-4">Add a New Team Member</h3>
                <div className="flex gap-4">
                    {/* Input Section */}
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Name"
                            value={newMember.name}
                            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                            className="border rounded-xl p-2 w-full mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Role"
                            value={newMember.role}
                            onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                            className="border rounded-xl p-2 w-full mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Year of Study"
                            value={newMember.year}
                            onChange={(e) => setNewMember({ ...newMember, year: e.target.value })}
                            className="border rounded-xl p-2 w-full mb-2"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="border rounded-xl p-2 w-full mb-2"
                        />
                        <input
                            type="text"
                            placeholder="LinkedIn Profile Link"
                            value={newMember.link}
                            onChange={(e) => setNewMember({ ...newMember, link: e.target.value })}
                            className="border rounded-xl p-2 w-full mb-4"
                        />
                        <button
                            onClick={handleAddMember}
                            className="w-20 bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 w-full"
                        >
                            Add
                        </button>
                    </div>

                    {/* Preview Section */}
                    <div className="flex-1 flex justify-center items-center">
                        {newMember.image ? (
                            <img
                                src={newMember.image}
                                alt="Preview"
                                className="w-48 h-48 rounded-lg shadow-lg border"
                            />
                        ) : (
                            <p className="text-gray-500">Image preview will appear here.</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full h-[2px] bg-gray-400 my-2"></div>
            <div>
                <h3 className="text-md font-semibold mb-2">Current Team Members</h3>
                {teamMembers.length > 0 ? (
                    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
                        {teamMembers.map((member) => (
                            <li
                                key={member.id}
                                className="w-3/4 flex items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:scale-105 transition transform hover:shadow-lg"
                            >
                                {/* Left side - Text details */}
                                <div className="flex-1">
                                    <p className="text-gray-800 font-medium">{member.name}</p>
                                    <p className="text-gray-600 text-sm">{member.role}</p>
                                    <p className="text-gray-600 text-sm">{member.year}</p>
                                </div>

                                {/* Right side - Image */}
                                {member.image && (
                                    <div className="ml-4">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-16 h-16 rounded-full"
                                        />
                                    </div>
                                )}

                                {/* Remove button */}
                                <button
                                    onClick={() => handleRemoveMember(member.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-4"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No team members available.</p>
                )}
            </div>
        </div>
    );
}

export default ManageTeam;
