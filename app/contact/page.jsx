import Form from "@/components/Form/Form";

const Contact = () => {
  return (
    <div className="container flex items-center justify-center h-screen px-1 m-auto">
      <div className="w-full max-w-md">
        <h2 className="mb-6 text-3xl text-center text-sky-500">
          Want to chat?
        </h2>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
