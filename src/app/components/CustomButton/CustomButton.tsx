import React from "react";
import classNames from "classnames";

type Variant = "filled" | "outlined";
type Theme = "light" | "dark";

interface ButtonProps {
  text?: string;
  variant?: Variant;
  padding?:string;
  fontWeight?:string;
  textSize?:string;
  colorTextLight?: string;
  colorTextLightHover?: string;
  colorTextDark?: string;
  colorTextDarkHover?: string;
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
  lightBackgroundHoverColor?: string;
  darkBackgroundHoverColor?: string;
  lightBorderColor?: string;
  darkBorderColor?: string;
  lightBorderHoverColor?: string;
  darkBorderHoverColor?: string;
  theme?: Theme;
}

const CustomButton: React.FC<ButtonProps> = ({
  text = "Click",
  variant = "filled",
  padding = "px-10 py-4",
  fontWeight = "font-bold",
  textSize = "text-base",
  colorTextLight = "text-white",
  colorTextDark = "text-white",
  colorTextLightHover = "hover:text-black-100",
  colorTextDarkHover = "hover:gray-300",
  lightBackgroundColor = "bg-blue-500",
  darkBackgroundColor = "bg-blue-900",
  lightBackgroundHoverColor = "hover:bg-blue-600",
  darkBackgroundHoverColor = "hover:bg-blue-800",
  lightBorderColor = "border-blue-500",
  darkBorderColor = "border-blue-900",
  lightBorderHoverColor = "hover:border-blue-600",
  darkBorderHoverColor = "hover:border-blue-800",
  theme = "light",
}) => {
  const baseClasses = `${padding} ${fontWeight} ${textSize} rounded-xl  focus:outline-none transition-all`;

  // Conditionally generate classes based on theme, variant, and color props
  const buttonClasses = classNames(baseClasses, {
    // Filled button variant
    [`${lightBackgroundColor} ${colorTextLight}`]:
      variant === "filled" && theme === "light",
    [`${darkBackgroundColor} ${colorTextDark}`]:
      variant === "filled" && theme === "dark",

    // Hover styles for filled variant
    [`${lightBackgroundHoverColor} ${colorTextLightHover}`]:
      variant === "filled" && theme === "light",
    [`${darkBackgroundHoverColor} ${colorTextDarkHover}`]:
      variant === "filled" && theme === "dark",

    // Outlined button variant
    [`border-2 ${lightBorderColor} ${lightBorderColor} bg-transparent`]:
      variant === "outlined" && theme === "light",
    [`border-2 ${darkBorderColor} ${darkBorderColor} bg-transparent`]:
      variant === "outlined" && theme === "dark",

    // Hover styles for outlined variant
    [`${lightBorderHoverColor} ${lightBackgroundHoverColor} ${colorTextLightHover}`]:
      variant === "outlined" && theme === "light",
    [`${darkBorderHoverColor} ${darkBackgroundHoverColor} ${colorTextDarkHover}`]:
      variant === "outlined" && theme === "dark",
  });

  return (
    <button className={buttonClasses} >
      {text}
    </button>
  );
};

export default CustomButton;

// import React from "react";

// type Variant = "filled" | "outlined";
// type Theme = "light" | "dark";

// interface ButtonProps {
//   variant?: Variant;
//   lightColor?: string;
//   darkColor?: string;
//   theme?: Theme;
//   children: React.ReactNode;
//   onClick: () => void;
// }

// const CustomButton: React.FC<ButtonProps> = ({
//   variant = "filled",
//   lightColor = "blue",
//   darkColor = "blue",
//   theme = "light",
//   onClick,
//   children,
// }) => {
//   const baseClasses = "px-4 py-2 rounded focus:outline-none transition-all";

//   const styles: Record<
//     Variant,
//     Record<Theme, Record<"default" | "hover" | "focus", string>>
//   > = {
//     filled: {
//       light: {
//         default: bg-${lightColor}-500 text-white,
//          bg-${lightColor}-600,
//         focus: focus:ring focus:ring-${lightColor}-300,
//       },
//       dark: {
//         default: bg-${darkColor}-800 text-white,
//          bg-${darkColor}-700,
//         focus: focus:ring-${darkColor}-500,
//       },
//     },
//     outlined: {
//       light: {
//         default: border-2 border-${lightColor}-500 text-${lightColor}-500 bg-transparent,
//          bg-${lightColor}-500 text-white,
//         focus: focus:ring focus:ring-${lightColor}-300,
//       },
//       dark: {
//         default: border-2 border-${darkColor}-500 text-${darkColor}-500 bg-transparent,
//          bg-${darkColor}-500 text-white,
//         focus: focus:ring-${darkColor}-500,
//       },
//     },
//   };

//   // Get the classes based on the variant and current theme
//   const variantClasses = styles[variant][theme];
//   const classes = ${baseClasses} ${variantClasses.default} ${variantClasses.hover} ${variantClasses.focus};

//   return (
//     <button className={classes} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

// export default CustomButton;
