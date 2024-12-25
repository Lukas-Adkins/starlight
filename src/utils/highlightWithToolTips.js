import { Tooltip } from "react-tooltip";

import {
  TRAIT_TOOLTIPS,
  ALLOWED_TOOLTIP_CATEGORIES,
} from "../constants/appConfig";

const highlightWithTooltips = (text, activeCategory) => {
    if (!ALLOWED_TOOLTIP_CATEGORIES.includes(activeCategory)) return text;
  
    if (typeof text !== "string") return text;
  
    const sortedTraits = Object.keys(TRAIT_TOOLTIPS).sort(
      (a, b) => b.length - a.length
    );
  
    let tokens = [text];
  
    sortedTraits.forEach((trait) => {
      const tooltip = TRAIT_TOOLTIPS[trait];
      const regex = new RegExp(`\\b${trait}\\b`, "gi");
  
      tokens = tokens.flatMap((token) => {
        if (typeof token === "string") {
          return token.split(regex).flatMap((part, i, arr) =>
            i < arr.length - 1
              ? [
                  part,
                  <span
                    key={`${trait}-${i}`}
                    data-tooltip-id={`tooltip-${trait}`}
                    data-tooltip-content={tooltip}
                    className="border-b border-dashed border-gray-400 cursor-help"
                  >
                    {trait}
                    <Tooltip
                      id={`tooltip-${trait}`}
                      place="top"
                      style={{
                        maxWidth: "90vw",
                        whiteSpace: "normal",
                        overflowWrap: "break-word",
                      }}
                    />
                  </span>,
                ]
              : [part]
          );
        }
        return token;
      });
    });
  
    return <>{tokens}</>;
  };
  
export default highlightWithTooltips;