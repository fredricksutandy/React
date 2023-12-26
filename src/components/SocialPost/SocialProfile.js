// ProfileSettings.js
import React, { useState } from 'react';

const ProfileSettings = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('avatar1.png'); // Default avatar

  const handleSettingsSubmit = () => {
    if (username.trim() !== '') {
      onSubmit(username, avatar);
      setUsername('');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Profile Settings</h2>
      <label className="mb-2 block">
        Username:
        <input
          type="text"
          className="border border-gray-300 p-2 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="mb-2 block">
        Avatar:
        <select
          className="border border-gray-300 p-2 w-full"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        >
          <option value="avatar1.png">Avatar 1</option>
          <option value="avatar2.png">Avatar 2</option>
          {/* Add more avatar options as needed */}
        </select>
      </label>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleSettingsSubmit}
      >
        Save Settings
      </button>
    </div>
  );
};

export default ProfileSettings;
