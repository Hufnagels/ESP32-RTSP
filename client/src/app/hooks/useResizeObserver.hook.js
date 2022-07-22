import React from "react";
import ResizeObserver from "resize-observer-polyfill";

/**
   * @functionName useResizeObserver
   * update svg/any html element width, height on resize
   * @dependency yarn add resize-observer-polyfill
   * @param ref the dom element
   * @output DOMRectReadOnly {x: 0, y: 0, width: 1488, height: 561.390625, top: 0, …}
              bottom: 561.390625
              height: 561.390625
              left: 0
              right: 1488
              top: 0
              width: 1488
              x: 0
              y: 0
   *  @usage
              const dimensions = useResizeObserver(SVGwrapperRef);
              useEffect(() => {
                if (!dimensions) return;
                setWidth(dimensions.width)
                setHeight(dimensions.height)
              }, [dimensions])
   */
const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = React.useState(null);
  React.useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

export default useResizeObserver;
