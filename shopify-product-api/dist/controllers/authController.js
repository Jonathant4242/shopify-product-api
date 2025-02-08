"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.signup = exports.login = void 0;
// User login
const login = (req, res) => {
    res.json({ message: "User logged in", user: req.body });
};
exports.login = login;
// User signup
const signup = (req, res) => {
    res.json({ message: "User signed up", user: req.body });
};
exports.signup = signup;
// User logout
const logout = (req, res) => {
    res.json({ message: "User logged out" });
};
exports.logout = logout;
