import { Request, Response } from "express";
import { createUser, getAllUsers } from "../services/userService";

const registerUser = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            message: "Error creating user", error
        });
    };
}

    const listUsers = async (req: Request, res: Response) => {
        try {
            const users = await getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({
                message: "Error fetching users", error
            });
        }
    }


export { registerUser, listUsers };