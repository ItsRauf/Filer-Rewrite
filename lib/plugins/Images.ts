import { ImagesOptions } from "@typedefs/ImagePlugin.ts";
import { Plugin } from "@plugins/Plugin.ts";
import { Router } from "oak/mod.ts";
import { getFileExtension } from "@helpers/getFileExtension.ts";
import { nanoid } from "https://cdn.skypack.dev/nanoid";

export class Images extends Plugin {
  constructor(public options: ImagesOptions) {
    super(options);
  }

  handler() {
    const router = new Router();
    router.post("/images", async (ctx) => {
      if (ctx.request.hasBody) {
        const form = ctx.request.body({ type: "form-data" }).value;
        const data = await form.read({ maxSize: 10000000 });
        // console.log(data.files);
        const file = data.files?.[0];
        if (file) {
          const ext = getFileExtension(file.originalName);
          let filename = file.originalName;
          if (this.options.filename === "nanoid") filename = nanoid(8);
          Deno.writeFile(
            `${Deno.cwd()}/${this.options.path}/${filename}.${ext}`,
            (file.content as unknown) as Uint8Array
          );
          ctx.response.body = `${filename}.${ext}`;
        }
      }
    });
    router.get("/images/:image", async (ctx) => {
      await ctx.send({
        root: `${Deno.cwd()}/${this.options.path}`,
        path: ctx.params.image ?? "",
      });
    });
    return router;
  }
}
