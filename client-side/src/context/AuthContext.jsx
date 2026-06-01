import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// Demo credentials (pre-seeded)
const DEMO_USER = {
  fullName: "Marry Doe",
  email: "marry@gmail.com",
  password: "marry123",
  phone: "9876543210",
  company: "PopX Inc.",
  isAgency: true,
  bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("popx_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (email, password) => {
    // Check registered users in localStorage
    const users = JSON.parse(localStorage.getItem("popx_users") || "[]");

    // Also allow demo credentials
    const allUsers = [DEMO_USER, ...users];

    const found = allUsers.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (found) {
      setUser(found);
      localStorage.setItem("popx_user", JSON.stringify(found));
      return { success: true };
    }

    return { success: false, message: "Invalid email or password." };
  };

  const signup = (formData) => {
    const users = JSON.parse(localStorage.getItem("popx_users") || "[]");

    const exists = users.find(
      (u) => u.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (exists) {
      return { success: false, message: "Email already registered." };
    }

    const newUser = {
      ...formData,
      avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 8)}.jpg`,
      bio: "Hey there! I'm using PopX.",
    };

    const updated = [...users, newUser];
    localStorage.setItem("popx_users", JSON.stringify(updated));
    setUser(newUser);
    localStorage.setItem("popx_user", JSON.stringify(newUser));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("popx_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);