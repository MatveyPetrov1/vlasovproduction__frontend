import React from "react";
import { fetchSchoolItems } from "../redux/slices/pages/schoolItems";
import { setCurrentPage } from "../redux/slices/components/headerSlice";
import { useDispatch } from "react-redux";

export const useLoading = (ref) => {
  const [quintupleImage, setQuintupleImage] = React.useState(false);
  const [tripleImage, setTripleImage] = React.useState(false);
  const [quarterImage, setQuarterImage] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSchoolItems());
    dispatch(setCurrentPage(2));

    if (ref.current.offsetWidth > 1350) {
      setTripleImage(false);
      setQuarterImage(false);
      setQuintupleImage(true);
    }
    if (ref.current.offsetWidth <= 1350 && ref.current.offsetWidth > 580) {
      setTripleImage(false);
      setQuarterImage(true);
      setQuintupleImage(false);
    }

    if (ref.current.offsetWidth <= 580) {
      setTripleImage(true);
      setQuarterImage(false);
      setQuintupleImage(false);
    }

    if (ref.current.offsetWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const imageCount = () => {
      if (ref.current.offsetWidth > 1350) {
        setTripleImage(false);
        setQuarterImage(false);
        setQuintupleImage(true);
      }
      if (ref.current.offsetWidth <= 1350 && ref.current.offsetWidth > 580) {
        setTripleImage(false);
        setQuarterImage(true);
        setQuintupleImage(false);
      }
      if (ref.current.offsetWidth <= 580) {
        setTripleImage(true);
        setQuarterImage(false);
        setQuintupleImage(false);
      }
      if (ref.current.offsetWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", imageCount);

    return () => {
      window.removeEventListener("resize", imageCount);
    };
  }, []);

  return { quintupleImage, tripleImage, quarterImage, isMobile };
};
