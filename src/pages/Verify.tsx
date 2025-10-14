import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const [email] = useState((location.state as string) || "");

  useEffect(() => {
    if (!email) navigate("/");
  }, [email]);

  return <div>I am verify component</div>;
};

export default Verify;
