import Form from "./Form";

const SubmissionForm = ({isActive,setIsActive,formData,onInput, onSubmitForm }) => {
  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>
      <Form  onSubmitForm={onSubmitForm} onInput={onInput} formData={formData} isActive={isActive} setIsActive={setIsActive}/>
    </div>
  );
};

export default SubmissionForm;
