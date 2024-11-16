import Filtering from "./filtering";
import NoData from "./NoData";
import Sorting from "./Sorting";
import { useState } from "react";

const ExpenseIncomeLists = ({ detailsData, onSearch , onEdit, onDelete, children }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const handleOrder = (order) => {
    setSortOrder(order);
  };

  const sortedData = detailsData.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.amount - b.amount;
    } else {
      return b.amount - a.amount;
    }
  });
  return (
    <div className="border rounded-md relative">
      <div className="bg-[#F9FAFB] py-4 px-4 rounded-md space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mx-auto"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-7 text-gray-800">
                {children}
              </h3>
            </div>
          </div>
          <div>
            <Sorting onOrderClick={handleOrder} />
          </div>
        </div>
        <Filtering onSearch={onSearch}/>
      </div>
      {detailsData.length > 0 ? (
        <div className="p-4 divide-y">
          {sortedData.map((detail) => (
            <div
              key={detail.id}
              className="flex justify-between items-center py-2 relative group cursor-pointer"
            >
              <div>
                <h3 className="text-base font-medium leading-7 text-gray-600">
                  {detail.category}
                  {console.log(detail)}
                </h3>
                <p className="text-xs text-gray-600">{detail.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                  BDT {detail.amount}
                </p>

                <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                  <button
                    onClick={() => onEdit(detail)}
                    className="hover:text-teal-600"
                    role="button"
                    title="Edit Button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                      <path d="M13.5 6.5l4 4" />
                    </svg>
                  </button>

                  <button
                    onClick={() => onDelete(detail)}
                    className="hover:text-red-600"
                    role="button"
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default ExpenseIncomeLists;