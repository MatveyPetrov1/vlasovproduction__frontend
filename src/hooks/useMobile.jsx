import React from "react";

export const useMobile = (ref, status) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (status === "loaded" && ref.current.offsetWidth <= 768) {
      setIsMobile(true);
    } else if (status === "loaded" && ref.current.offsetWidth > 768) {
      setIsMobile(false);
    }

    const handleResize = () => {
      if (status === "loaded" && ref.current.offsetWidth <= 768) {
        setIsMobile(true);
      } else if (status === "loaded" && ref.current.offsetWidth > 768) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [status]);

  return { isMobile };
};
