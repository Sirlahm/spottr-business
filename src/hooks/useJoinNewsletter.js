import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useJoinNewsletter = (data) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const subscribe = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://backend-27awp.ondigitalocean.app/newsletter",
        data
      );
      setResponseData(response.data);
      toast.success(response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      if (error.response) {
        toast.warn(error.response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        toast.error("Network connection failed", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
    setIsLoading(false);
  };

  return { isLoading, responseData, subscribe };
};
