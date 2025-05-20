"use client";

import { useEffect } from "react";

export const CodeCopyButtons = () => {
  useEffect(() => {
    document.querySelectorAll("pre").forEach((pre) => {
      if (pre.parentElement?.classList.contains("code-wrapper")) return;

      const code = pre.querySelector("code");
      if (!code) return;

      const wrapper = document.createElement("div");
      wrapper.className = "code-wrapper";
      wrapper.style.position = "relative";

      const button = document.createElement("button");
      button.textContent = "📋";
      button.className = "copy-btn";

      Object.assign(button.style, {
        position: "absolute",
        top: "0.5rem",
        right: "3%",
        background: "#4b5563",
        color: "#fff",
        fontSize: "0.75rem",
        padding: "0.2rem 0.5rem",
        borderRadius: "4px",
        cursor: "pointer",
        zIndex: 10,
        pointerEvents: "auto",
      });

      button.onclick = () => {
        navigator.clipboard.writeText(code.textContent || "");
        button.textContent = "✅";
        setTimeout(() => (button.textContent = "📋"), 1000);
      };

      pre.style.paddingTop = "0.8rem"; 
      pre.style.margin = "0";
      pre.style.overflowX = "auto";

      const parent = pre.parentElement;
      if (!parent) return;

      parent.replaceChild(wrapper, pre);
      wrapper.appendChild(pre);
      wrapper.appendChild(button);
    });
  }, []);

  return null;
};