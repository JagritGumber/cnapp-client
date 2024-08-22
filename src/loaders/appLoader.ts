import { LoaderFunction, redirect } from "react-router-dom";

const Apploader: LoaderFunction = ({ request }) => {
  if (request.url.endsWith("/app") || request.url.endsWith("/app/")) {
    return redirect("/app/dashboard");
  }
  return null;
};

export default Apploader;
