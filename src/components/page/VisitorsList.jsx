import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const VisitorsList = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const fetchVisitors = async () => {
      const visitorsCollection = collection(db, "tasdiqlar");
      const visitorsSnapshot = await getDocs(visitorsCollection);
      const visitorsList = visitorsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVisitors(visitorsList);
    };

    fetchVisitors();
  }, []);

  // Guests'ni tarjima qilish
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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Tashrif buyuruvchilar ro'yxati</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Ism</th>
              <th className="py-3 px-4 text-left">Kelish holati</th>
              <th className="py-3 px-4 text-left">Mehmon</th>
              <th className="py-3 px-4 text-left">Yuborilgan sana</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor, index) => (
              <tr key={visitor.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{visitor.name}</td>
                <td className="py-2 px-4">
                  {visitor.attendance === "yes" ? (
                    <span className="text-green-600 font-semibold">Kela oladi</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Kela olmaydi</span>
                  )}
                </td>
                <td className="py-2 px-4">{translateGuests(visitor.guests)}</td>
                <td className="py-2 px-4 text-gray-500 text-sm">
                  {new Date(visitor.createdAt).toLocaleString("uz-UZ", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
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
