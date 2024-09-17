/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useFormState } from "react-dom";

export default  function PostBtn() {
  const [, , isPending] = useFormState();
  return (
    <button
      disabled={pending}
      className="bg-blue-600 py-2 px-4"
      type="submit"
    >
      Submit
    </button>
  );
}
