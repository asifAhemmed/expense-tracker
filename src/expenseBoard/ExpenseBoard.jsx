import BalanceSheet from "./balanceSheet/BalanceSheet";
import ExpenseIncomeLists from "./ExpenseIncomeLists";
import SubmissionForm from "./submissionFrom/SubmissionForm";
import { useState } from "react";
import { expenseCategories, incomeCategories } from "../data/data";

const ExpenseBoard = () => {
  const [data, setData] = useState({
    expenses: [],
    incomes: [],
  });

  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    type: "",
    amount: 0,
    date: "",
    category: "",
  });

  const [isActive, setIsActive] = useState("expense");
  const [isEdit, setIsEdit] = useState(false);

  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...formData };
    newData[field] = value;
    if (isActive === "expense") {
      newData["type"] = "expense";
    } else {
      newData["type"] = "income";
    }
    setFormData(newData);
  };

  const handleSubmit = (formData) => {
    if(isEdit){
      if(formData.type === "expense"){
        const updatedData = data.expenses.map((item) => {
          if(item.id === formData.id){
            return {...formData, amount: parseFloat(formData.amount)};
          }
          return item;
        });
        setData({
          ...data,
          expenses: updatedData
        });
        setIsEdit(false);
      }else{
        const updatedData = data.incomes.map((item) => {
          if(item.id === formData.id){
            return {...formData, amount: parseFloat(formData.amount)};
          }
          return item;
        });
        setData({
          ...data,
          incomes: updatedData
        });
        setIsEdit(false);
      }
    }
    else{
      if (formData.type === "expense") {
        setData({
          ...data,
          expenses: [
            ...data.expenses,
            {
              id: crypto.randomUUID(),
              amount: parseFloat(formData.amount),
              category: formData.category,
              date: formData.date,
              type: "expense",
            },
          ],
        });
      } else {
        setData({
          ...data,
          incomes: [
            ...data.incomes,
            {
              id: crypto.randomUUID(),
              amount: parseFloat(formData.amount),
              category: formData.category,
              date: formData.date,
              type: "income",
            },
          ],
        });
      }
    }
   
  };

  const handleEdit = (item) => {
    setIsEdit(true);
    setFormData(item);
  }

  const handleDelete = (deletedData) => {
    console.log(deletedData);
    if (
      window.confirm(`Are you sure you want to delete ${deletedData.category}?`)
    ) {
      if (deletedData.type === "expense") {
        const updatedData = data.expenses.filter(
          (data) => data.id !== deletedData.id
        );
        setData({
          ...data,
          expenses: updatedData,
        });
      } else {
        const updatedData = data.incomes.filter(
          (data) => data.id !== deletedData.id
        );
        setData({
          ...data,
          incomes: updatedData,
        });
      }
    }
  };

  const handleSearch = (searchTerm) => {
      const expensesData = data.expenses.filter(expense => expense.category.toLowerCase().includes(searchTerm.toLowerCase()));
      const incomesData = data.incomes.filter(income => income.category.toLowerCase().includes(searchTerm.toLowerCase()));
      setData({
        ...data,
        expenses: expensesData,
        incomes: incomesData
      });
  }

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SubmissionForm
          onSubmitForm={handleSubmit}
          onInput={handleInput}
          formData={formData}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <div className="lg:col-span-2">
          <BalanceSheet data={data} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <ExpenseIncomeLists
              detailsData={data.incomes}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onSearch={handleSearch}
              
            >
              {"Incomes"}
            </ExpenseIncomeLists>
            <ExpenseIncomeLists
              detailsData={data.expenses}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onSearch={handleSearch}
              
            >
              {"Expenses"}
            </ExpenseIncomeLists>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpenseBoard;
