import { useMemo } from "react";

type SaveSessionFunc = (
  accessToken: string,
  refreshToken: string,
  rememberMy: boolean
) => void;

const useSessionFuncs = (reloadTrigger: boolean) => {
  const getSessionStorageTokens = () => ({
    accessToken: sessionStorage.getItem("accessToken"),
    refreshToken: sessionStorage.getItem("refreshToken"),
  });

  const getLocalStorageTokens = () => ({
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  });

  const saveSession: SaveSessionFunc = (
    accessToken,
    refreshToken,
    rememberMy
  ) => {
    if (rememberMy) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
    } else {
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("refreshToken", refreshToken);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }

    localStorage.setItem("userAuth", "true");
  };

  const sessionTokens = useMemo(() => {
    const {
      accessToken: accessTokenInSessionStorage,
      refreshToken: refreshTokenInSessionStorage,
    } = getSessionStorageTokens();

    const {
      accessToken: accessTokenInLocalStorage,
      refreshToken: refreshTokenInLocalStorage,
    } = getLocalStorageTokens();

    if (accessTokenInSessionStorage && refreshTokenInSessionStorage) {
      return {
        accessToken: accessTokenInSessionStorage,
        refreshToken: refreshTokenInSessionStorage,
      };
    }

    if (accessTokenInLocalStorage && refreshTokenInLocalStorage) {
      return {
        accessToken: accessTokenInLocalStorage,
        refreshToken: refreshTokenInLocalStorage,
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadTrigger]);

  return {
    sessionTokens,
    saveSession,
  };
};

export default useSessionFuncs;
