import{j as e,Y as d}from"./app-BN8QCiGR.js";import{A as i}from"./AuthenticatedLayout-ChmcsSHP.js";import c from"./TasksTable-DJXw5zeJ.js";import"./ApplicationLogo-D2GHEATx.js";import"./transition-DloviOnu.js";import"./TableHeading-QC8354JR.js";import"./SelectInput-D3PGrB4K.js";import"./TextInput--uAAXQ2g.js";import"./constants-Cer6sPW_.js";function g({auth:a,user:s,tasks:t,queryParams:l}){return l=l||{},e.jsxs(i,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:`User"${s.name}"`}),children:[e.jsx(d,{title:`User"${s.name}"`}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsx("div",{children:e.jsx("img",{src:s.image_path,alt:"",className:"w-full h-64 object-cover"})}),e.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[e.jsxs("div",{className:"grid gap-1 grid-cols-2 mt-2",children:[e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs("label",{className:"font-bold text-lg ",children:["User ID",e.jsx("p",{className:"mt-1",children:s.id})]})}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg ",children:"User Name "}),e.jsx("p",{className:"mt-1",children:s.name})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"User Status"}),e.jsx("p",{className:"mt-1",children:e.jsx("span",{className:"inline-block rounded text-white text-sm px-2 py-1 "})})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg ",children:"Created By "}),e.jsx("p",{className:"mt-1",children:s.createdBy.name})]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("label",{className:"font-bold text-lg",children:"Due Date"}),e.jsx("p",{className:"mt-1",children:s.due_date})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"Create Date"}),e.jsx("p",{className:"mt-1",children:s.created_at})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"Updated By"}),e.jsx("p",{className:"mt-1",children:s.updatedBy.name})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"font-bold text-lg",children:"User Description"}),e.jsx("p",{className:"mt-1",children:s.description})]})]})]})})}),e.jsx("div",{className:"pb-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsx(c,{tasks:t,queryParams:l,hideUserColumn:!0})})})})})]})}export{g as default};
