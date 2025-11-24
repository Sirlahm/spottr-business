import { ToastContainer, toast } from "react-toastify";

function index() {
  const notify = () =>
    toast.info("🚀🚀 Coming Soon !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  return (
    <>
      <button className="sign-up-button" onClick={notify}>
        Sign up now
      </button>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default index;
