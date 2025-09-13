/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module "*.css?url" {
  const url: string;
  export default url;
}
