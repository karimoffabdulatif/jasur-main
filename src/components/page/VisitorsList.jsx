import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const VisitorsList = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    const visitorsCollection = collection(db, "tasdiqlar");
    const visitorsSnapshot = await getDocs(visitorsCollection);
    const visitorsList = visitorsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setVisitors(visitorsList);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Haqiqatan ham ushbu tashrifchini o'chirmoqchimisiz?")) {
      try {
        await deleteDoc(doc(db, "tasdiqlar", id));
        setVisitors(visitors.filter((visitor) => visitor.id !== id));
      } catch (error) {
        console.error("Xatolik yuz berdi: ", error);
      }
    }
  };

  const translateGuests = (guest) => {
    switch (guest) {
      case "alone":
        return "Yolg‘iz";
      case "with-partner":
        return "Hamroh bilan";
      case "with-family":
        return "Oila bilan";
      default:
        return guest;
    }
  };

  // 👉 RETURN shu yerda bo'lishi kerak:
 return (
  <div className="min-h-screen min-w-[320px] flex flex-col sm:p-6 sm:bg-gray-50">
    <h1 className="text-xl pt-[20px] sm:pt-0 sm:text-2xl font-bold mb-4 text-center">
      Tashrif buyuruvchilar ro'yxati
    </h1>

    {/* Jadval scroll uchun wrapper */}
    <div className="w-full overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-max w-full text-[10px] sm:text-base table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">#</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Ism</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Kelish holati</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Mehmon</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Yuborilgan sana</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Amallar</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor, index) => (
            <tr key={visitor.id} className="border-b hover:bg-gray-50">
              <td className="py-1 px-2 sm:py-2 sm:px-4">{index + 1}</td>
              <td className="py-1 px-2 sm:py-2 sm:px-4">{visitor.name}</td>
              <td className="py-1 px-2 sm:py-2 sm:px-4">
                {visitor.attendance === "yes" ? (
                  <span className="text-green-600 font-semibold">Kela oladi</span>
                ) : (
                  <span className="text-red-600 font-semibold">Kela olmaydi</span>
                )}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4">{translateGuests(visitor.guests)}</td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 text-gray-500 text-[8px] sm:text-sm">
                {new Date(visitor.createdAt).toLocaleString("uz-UZ", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </td>
              <td className="py-1 px-2 sm:py-2 sm:px-4">
                <button
                  onClick={() => handleDelete(visitor.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs sm:text-sm"
                >
                  O'chirish
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

};

export default VisitorsList;
