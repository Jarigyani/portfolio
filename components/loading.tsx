const Loading = () => {
  return (
    <div className="mockup-code absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <pre data-prefix="$">
        <code>npm i daisyui</code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>installing...</code>
      </pre>
      <pre data-prefix=">" className="text-success">
        <code>Done!</code>
      </pre>
    </div>
  )
}

export default Loading
