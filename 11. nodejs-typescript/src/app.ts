import express, { Express, Request, Response, NextFunction } from "express";
import { IUser, User } from "./models/User";

const app: Express = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Extend the Request interface to include a custom property `startTime`
interface CustomRequest extends Request {
  startTime?: number;
}

// Middleware to add the request start time for monitoring request duration
app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
  next();
});

// Root route: basic message to confirm server is working
app.get("/", (req: Request, res: Response) => {
  res.send("Hello. TypeScript with Express");
});

// Route to fetch all users from the database
app.get("/users", async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find(); // Fetch all users from the database
    res.json(users);
  } catch (e) {
    res
      .status(400)
      .json({ message: "An error occurred while fetching users." });
  }
});

// Route to create a new user
// Expected body format: { name: string, email: string }
app.post("/user", (req: Request<{}, {}, User>, res: Response) => {
  const { name, email } = req.body;
  res.json({
    message: `User created: ${name} - ${email}`,
  });
});

// Route to fetch a user's details by ID
// Expected URL: /users/:id, where :id is the user's ID
app.get("/users/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  res.json({
    userId: id,
  });
});

// Interface to define the shape of a User object
interface User {
  name: string;
  email: string;
}

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
