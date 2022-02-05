import { useEffect, useRef } from "react";

export default function useTitle({ description, title }) {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(
    document.querySelector('meta[name="description"]').getAttribute('content')
  );

  useEffect(() => {
    const preTitle = prevTitle.current;
    if (title) {
      document.title = `${title} | GIFos App |`;
    }
    return () => (document.title = preTitle);
  }, [title]);

  useEffect(() => {
    const preDescription = prevDescription.current;
    const metaDescription = document.querySelector('meta[name="description"]');

    if (description) {
      metaDescription.setAttribute("content", description);
    }

    return () => metaDescription.setAttribute("content", preDescription);
  }, [description]);
}
