import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/*
This file tells Vite how to start the project.

`defineConfig(...)` is a helper that holds the app's setup.
Inside it, we add the React plugin so Vite understands React files
like `.jsx` and can run the app correctly in the browser.
*/
export default defineConfig({
  plugins: [react()],
});
