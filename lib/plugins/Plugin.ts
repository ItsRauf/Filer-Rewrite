import { Router } from "oak/mod.ts";

export abstract class Plugin {
  constructor(protected options: any) {}
  abstract handler(): Router;
}
