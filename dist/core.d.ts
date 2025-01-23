import { Options } from './types';

declare function htmlTransformer(code: string, options: Options | undefined): string;
declare function vueTransformer(code: string, options: Options | undefined): string;

export { htmlTransformer, vueTransformer };
