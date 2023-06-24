import { NextFunction, Request, Response } from "express";

class UserController {
  static async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password, confirmPassword } = req.body;

      res.status(201).json({
        message: "User created successfully",
        data: req.body,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
