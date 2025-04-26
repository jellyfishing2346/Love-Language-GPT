// frontend/src/components/Analyzer.tsx
import { api } from '../integrations/api'
import { $, component$, useSignal, useTask$ } from '@builder.io/qwik'

export default component$(() => {
  const text = useSignal('')
  const result = useSignal<any>()

  const handleSubmit = $(() => {
    api('analyzeText', 'POST', { text: text.value }).then((response) => {
      result.value = response
    })
  })

  return (
    <div>
      <textarea bind:value={text} />
      <button onClick$={handleSubmit}>Analyze</button>
      {result.value && <pre>{JSON.stringify(result.value, null, 2)}</pre>}
    </div>
  )
})