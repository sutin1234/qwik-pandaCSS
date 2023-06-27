import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { css, cva } from '../../styled-system/css';

export default component$(() => {
  const color = useSignal('red.500')
  const counter = useSignal(0)
  const style = useStore({ p: '2', color: 'red.500', fontSize: '3xl' })


  const button = cva({
    base: {
      display: 'flex'
    },
    variants: {
      visual: {
        solid: { bg: 'red.200', color: 'black' },
        outline: { borderWidth: '1px', borderColor: 'red.200', color: 'black' }
      },
      size: {
        sm: { padding: '4', fontSize: '12px' },
        lg: { padding: '8', fontSize: '24px' }
      }
    }
  })

  const changeStyle = $(() => {
    counter.value = counter.value === 0 ? 1 : 0
  })


  return (
    <>
      <h1 class={css(style)}>Hi 👋</h1>
      <p class={css({ p: '10' })}>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding. {color.value}<br />
        counter: {counter.value}
      </p>
      <button class={button({ size: counter.value === 0 ? 'sm' : 'lg', visual: 'solid' })} onClick$={changeStyle}>changeStyle</button>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
