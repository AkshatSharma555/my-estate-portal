// src/components/admin/InquiryViewer.jsx
import React from 'react';

function InquiryViewer({ inquiries, onDelete }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Inquiries</h2>
      {inquiries.length === 0 ? (
        <p className="text-slate-400">No inquiries found.</p>
      ) : (
        <div className="space-y-4">
          {inquiries.map(i => (
            <div key={i._id} className="bg-slate-800 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">{i.name} <span className="font-normal text-slate-400">&lt;{i.email}&gt;</span></p>
                  {i.phone && <p className="text-sm text-slate-400 mt-1">Phone: {i.phone}</p>}
                  <p className="mt-2 text-slate-300">{i.message}</p>
                </div>
                <button onClick={() => onDelete(i._id)} className="text-red-500 hover:underline flex-shrink-0 ml-4">Delete</button>
              </div>
              <p className="text-xs text-slate-500 mt-2">{new Date(i.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InquiryViewer;