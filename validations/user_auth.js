import { check } from "express-validator";

export const register_validation = [
  check("first_name").not().isEmpty().withMessage("First name is required"),
  check("last_name").not().isEmpty().withMessage("Last name is required"),
  check("email").isEmail().withMessage("Invalid email format"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  check("phone_number")
    .not()
    .isEmpty()
    .withMessage("Phone number is required")
    .isLength({ min: 10, max: 15 })
    .withMessage("Invalid phone number format"),
];

export const login_validation = [
  check("email").isEmail().withMessage("Invalid email format"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];
