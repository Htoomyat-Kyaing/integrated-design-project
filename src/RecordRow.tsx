const RecordRow = ({ record }: any) => {
  return (
    <tr className="text-gray-700 dark:text-slate-100">
      <td className="px-4 py-3 ">
        <div className="flex items-center text-sm">
          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src={`https://cbmasaqglquxmvqcfixl.supabase.co/storage/v1/object/public/images/${record.employees.first_name}_${record.employees.last_name}_${record.employees.id}.jpg`}
              alt=""
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="font-semibold">
              {record.employees.first_name} {record.employees.last_name}
            </p>
            <p className="text-xs text-gray-600 dark:text-slate-400">
              {record.employees.position}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 font-semibold text-ms">
        {record.employees.age}
      </td>
      <td className="px-4 py-3 text-xs ">
        {record.status ? (
          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
            {" "}
            Attended{" "}
          </span>
        ) : (
          <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
            {" "}
            Absented{" "}
          </span>
        )}
      </td>
      <td className="px-4 py-3 text-sm ">
        {record.created_at.replace("T", " ").slice(0, 19)}
      </td>
    </tr>
  );
};

export default RecordRow;
