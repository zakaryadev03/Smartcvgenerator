function TextArea({ name }) {
  return (
    <div>
      <textarea name={name} defaultValue={'my cool description'} id="disc" rows="7" className="border-2 w-full  border-gray-900">

      </textarea>
    </div>
  )
}
export default TextArea