import { Application } from "oak/mod.ts";
import { Auth } from "@typedefs/Auth.ts";
import { Http } from "@typedefs/Http.ts";
import { Plugin } from "@plugins/Plugin.ts";

export interface FilerOptions {
  auth: Auth;
  http: Http;
  plugins: Plugin[];
}

export class Filer {
  protected http: Application;
  constructor(protected options: FilerOptions) {
    console.log(this.options);
    this.http = new Application();
  }

  async init() {
    this.options.plugins
      .map((plugin) => plugin.handler())
      .forEach((router) => {
        this.http.use(router.routes());
        this.http.use(router.allowedMethods());
      });
    return this.http.listen({ port: this.options.http.port });
  }
}
