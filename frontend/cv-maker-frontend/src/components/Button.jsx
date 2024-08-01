import { useEffect } from "react";

function Button({isLoading}) {
  useEffect(() => {
    console.log(isLoading)
  });
  return (
    <div className="w-full mt-4">
      <button type="Submit" className={"btn btn-neutral mx-auto block " + isLoading && "disabled"}>
        {
          isLoading ? (<span>Making your CV...</span>) :
            (<span>Create CV!</span>)
        }
      </button>
    </div>
  )
}
export default Button