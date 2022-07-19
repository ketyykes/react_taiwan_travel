import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { visitInstance } from "../API/visit_api.js";

export default function useGetHomePage(pathUrl) {
  const [scenery, setScenery] = useState([]);
  const {
    token: {
      tokenData: { data: { access_token, token_type } = {} },
    },
  } = useSelector((state) => state);
  useEffect(() => {
    if (access_token) {
      (async () => {
        const config = {
          method: "get",
          url: pathUrl,
          params: {
            $top: 3,
            $format: "JSON",
            $filter: "Picture/PictureUrl1 ne null",
          },
          headers: {
            Accept: "application/json",
            Authorization: `${token_type} ${access_token}`,
          },
        };
        const { data } = await visitInstance(config);
        setScenery(data);
      })();
    }
  }, [access_token, token_type, pathUrl]);
  return scenery;
}
