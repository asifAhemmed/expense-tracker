const BalanceSheet = ({ data }) => {
  const totalExpenses = data.expenses.reduce((acc, expense) => acc + expense.amount, 0);

  const totalIncomes = data.incomes.reduce((acc, income) => acc + income.amount, 0);
  const balance = totalIncomes - totalExpenses;
  const textRed = balance < 0 ? 'text-red-600': '' ;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <BalanceCard name={"Balance"} amount={balance} textRed={textRed}/>
          <BalanceCard name={"Total Income"} amount={totalIncomes}/>
          <BalanceCard name={"Total Expense"} amount={totalExpenses} />
        </dl>
      </div>
    </div>
  );
};

export default BalanceSheet;

const BalanceCard = ({ name, amount, textRed}) => {
  return (
    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
      <dt className="text-base leading-7 text-gray-600">{name}</dt>
      <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
        <span className={textRed}>BDT {amount}</span>
      </dd>
    </div>
  );
};
