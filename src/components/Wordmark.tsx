/**
 * Wordmark — the Promoholic logotype rendered as styled text.
 *
 * Two variants:
 *   - `boxed`   (default false): wraps the wordmark in an outlined box,
 *     mirroring the original brand mark.
 *   - color is controlled via the `tone` prop so it works on both light
 *     and dark / brand backgrounds.
 */
interface WordmarkProps {
  boxed?: boolean;
  tone?: 'brand' | 'light' | 'ink';
  className?: string;
}

const toneClasses: Record<NonNullable<WordmarkProps['tone']>, string> = {
  brand: 'text-brand border-brand',
  light: 'text-white border-white',
  ink: 'text-ink border-ink'
};

export function Wordmark({ boxed = false, tone = 'ink', className = '' }: WordmarkProps) {
  return (
    <span data-ev-id="ev_4f08f5fad0"
    className={[
    'inline-flex items-center font-display font-black italic tracking-tight leading-none select-none',
    toneClasses[tone],
    boxed ? 'border-2 px-3 py-1.5' : '',
    className].
    join(' ')}>

			PROMOHOLIC
		</span>);

}