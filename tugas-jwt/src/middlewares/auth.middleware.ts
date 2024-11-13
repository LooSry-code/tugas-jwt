import { NextFunction, Request, Response } from "express";
import { getUserData, IUserToken } from "../config/jwt";

export interface IRequestWithUser extends Request {
  user?: IUserToken; // Menyimpan informasi pengguna dari token
}

const authMiddleware = (req: IRequestWithUser, res: Response, next: NextFunction) => {
  const authorization = req.headers?.authorization;

  if (!authorization) {
    return res.status(403).json({ message: "unauthorized", data: null });
  }

  const [prefix, token] = authorization.split(" ");

  if (!(prefix === "Bearer" && token)) {
    return res.status(403).json({ message: "unauthorized", data: null });
  }

  const user = getUserData(token);

  if (!user) {
    return res.status(403).json({
      message: "unauthorized",
      data: null,
    });
  }

  (req as IRequestWithUser).user = user;

  next();
};

//   try {
//     const user = getUserData(token);
//     req.user = user; // Menyimpan informasi pengguna ke dalam request
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: "unauthorized", data: null });
//   }
// };

export default authMiddleware;