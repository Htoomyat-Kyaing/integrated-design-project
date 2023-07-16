import { useEffect, useState } from "react";
import InsertAlert from "./components/InsertAlert";
import UpdateAlert from "./components/UpdateAlert";
import DeleteAlert from "./components/DeleteAlert";

const Alert = ({ eventType }: any) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const handleAlert = () => {
    setIsAlertVisible(true);
  };

  useEffect(() => {
    handleAlert();
  }, [eventType]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isAlertVisible]);

  switch (eventType) {
    case "INSERT":
      return (
        <>
          {isAlertVisible && (
            <>
              <InsertAlert />
              {/* <UpdateAlert /> */}
              {/* <DeleteAlert /> */}
            </>
          )}
        </>
      );
    case "UPDATE":
      return (
        <>
          {isAlertVisible && (
            <>
              {/* <InsertAlert /> */}
              <UpdateAlert />
              {/* <DeleteAlert /> */}
            </>
          )}
        </>
      );
    case "DELETE":
      return (
        <>
          {isAlertVisible && (
            <>
              {/* <InsertAlert /> */}
              {/* <UpdateAlert /> */}
              <DeleteAlert />
            </>
          )}
        </>
      );
  }
};

export default Alert;
