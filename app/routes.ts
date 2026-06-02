import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx"),

  route("/courses", "routes/courses.tsx"),
  route("/about", "routes/about.tsx"),
  route("/bulletins", "routes/bulletins.tsx"),
  route("/contact", "routes/contact.tsx"),

  route("/login", "routes/login.tsx"),
  route("/signup", "routes/signup.tsx"),

  route("/dashboard", "routes/dashboard.tsx"),
  route("/skill-tree", "routes/skill-tree.tsx"),
  route("/quests", "routes/quests.tsx"),
  route("/profile", "routes/profile.tsx"),
] satisfies RouteConfig;