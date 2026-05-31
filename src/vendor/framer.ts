// Minimal shim of the `framer` runtime APIs used by vendored Framer code
// components. We only need enough for the FAQ accordion to run in a normal
// React app (i.e. outside the Framer editor / canvas).

export const RenderTarget = {
  canvas: "CANVAS",
  export: "EXPORT",
  preview: "PREVIEW",
  thumbnail: "THUMBNAIL",
  // Always report "preview" so components render in their interactive state.
  current: () => "PREVIEW",
} as const;

// Framer's ControlType enum — components reference its members when registering
// property controls. Those registrations are inert outside the editor, so a
// Proxy that simply echoes the accessed key name is sufficient.
export const ControlType: Record<string, string> = new Proxy(
  {},
  { get: (_target, key) => String(key) },
);

// No-op: property controls only matter inside the Framer editor.
export function addPropertyControls(): void {}

// True only during static rendering (canvas/thumbnail/export). In a live app
// we're always interactive, so components should animate normally.
export function useIsStaticRenderer(): boolean {
  return false;
}
