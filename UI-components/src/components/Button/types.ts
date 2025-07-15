export type ButtonType = "primary" | "danger" | "info" | "success" | "warning";
export type ButtonSize = "large" | "small" | "normal";
export type NativeType = "button" | "submit" | "reset";

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  disable?: boolean;
  nativeType?: NativeType;
  autofocus?: boolean;
}

