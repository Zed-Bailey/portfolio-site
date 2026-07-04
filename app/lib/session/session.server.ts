import { createCookieSessionStorage } from "react-router";

// https://reactrouter.com/explanation/sessions-and-cookies#using-sessions
type SessionData = {
  previewMode: boolean;
};
type SessionFlashData = {};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: "__session",
      maxAge: 7200,
      path: "/",
      sameSite: "lax",
      secure: true,
      secrets: [process.env.CONTENTFUL_PREVIEW_SECRET ?? ""],
    },
  });

export { getSession, commitSession, destroySession };
