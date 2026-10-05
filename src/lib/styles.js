// Shared button class strings.
const btnBase =
  'group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-300 ease-out-soft';

export const buttonStyles = {
  primary: `${btnBase} bg-fg text-ink hover:bg-white`,
  secondary: `${btnBase} border border-line-strong text-fg hover:border-white/30 hover:bg-white/[0.04]`,
  ghost: `${btnBase} px-3 text-dim hover:text-fg`,
};
