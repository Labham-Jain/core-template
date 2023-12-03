import { cx as _cx } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge';

export const cx: typeof _cx = (...props) => twMerge(_cx(props));