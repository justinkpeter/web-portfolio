import React, {useEffect} from "react";

export const CustomCursor = () => {
    const cursorRef = React.useRef(null);

    useEffect(() => {
      document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const mouseX = clientX - cursorRef.current.clientWidth / 2;
        const mouseY = clientY - cursorRef.current.clientHeight / 2;
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      })

        document.removeEventListener("mousemove", (e) => {
        //
        })

    }, [])
    return (
        <div ref={cursorRef} className="fixed w-20 h-20 overflow-hidden rounded-full pointer-events-none border-2 border-white cursor-none ">
        </div>
    );
}