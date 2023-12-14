// x-data-spreadsheet 类型声明
declare module "x-data-spreadsheet/src/core/data_proxy";
declare module "x-data-spreadsheet/src/locale/zh-cn";

// WaveSurfer 类型声明
declare module "wavesurfer.js/dist/plugin/wavesurfer.regions.js";
declare module "wavesurfer.js/dist/plugin/wavesurfer.timeline.js";

// delegate 类型声明
declare module "delegate";

// web excel 所用的类声明
declare module "file-saver";
declare module "exceljs";

// lame 类型声明
declare module "lamejsfix";

// goodid.js 类型声明
declare module "goodid.js" {
  export default (length?: number = 8, prefix?: string): string => string;
}

// tiny-emitter 类型声明
declare module "tiny-emitter" {
  export default class TinyEmitter {
    public on(event: string, callback: Function, ctx?: any): this;
    public once(event: string, callback: Function, ctx?: any): this;
    public emit(event: string, ...args: any[]): this;
    public off(event: string, callback?: Function): this;
  }
}

declare module "tiny-emitter/instance" {
  import TinyEmitter from "tiny-emitter";
  export default new TinyEmitter();
}

// hhmmss 类型声明
declare module "hhmmss" {
  export default (seconds: number) => string;
}

// anime 类型声明
declare namespace anime {
  interface AnimeTimelineInstance {
    children: Array<anime.AnimeInstance>;
    remove: (targets: any) => void;
    reset: () => void;
  }
}

// delegate 类型声明
declare module "delegate";

// @qcharts/core 类型声明
declare module "@qcharts/core";

// @ckpack/vue-color 类型声明
declare module "@ckpack/vue-color" {
  export { Chrome };
}

declare module "lottie-web-parser";

declare module "lottie-web";

declare module "lodash";

declare module "vite-plugin-compression";
