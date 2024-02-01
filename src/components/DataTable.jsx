import React from 'react';

const DataTable = ( {items} ) => {
  return (
    <div className="mx-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className='bg-red-100 text-green-700 font-semibold'>
              <th className="py-2 px-4 border-b">UserID</th>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Body</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">{item.userId}</td>
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.title}</td>
                <td className="py-2 px-4 border-b">{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default DataTable;