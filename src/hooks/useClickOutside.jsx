import React from "react";

export const useClickOutside = (
  cityRef,
  serviceRef,
  portpholioRef,
  burgerRef,
  burgerPopupRef
) => {
  const [isOpenServices, setIsOpenServices] = React.useState(false);
  const [isOpenPortpholio, setIsOpenPortpholio] = React.useState(false);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const [isOpenCities, setIsOpenCities] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (cityRef.current && !event.composedPath().includes(cityRef.current)) {
        setIsOpenCities(false);
      }

      if (
        serviceRef.current &&
        !event.composedPath().includes(serviceRef.current)
      ) {
        setIsOpenServices(false);
      }

      if (
        portpholioRef.current &&
        !event.composedPath().includes(portpholioRef.current)
      ) {
        setIsOpenPortpholio(false);
      }

      if (
        burgerRef.current &&
        !event.composedPath().includes(burgerRef.current) &&
        !event.composedPath().includes(burgerPopupRef.current)
      ) {
        setIsOpenBurger(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return {
    isOpenServices,
    isOpenPortpholio,
    isOpenBurger,
    isOpenCities,
    setIsOpenServices,
    setIsOpenPortpholio,
    setIsOpenBurger,
    setIsOpenCities,
  };
};
