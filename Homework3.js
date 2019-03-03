const org1_depts = [
    {
    name: 'accounting',
    children: [
        { name: 'accounting payable', children: [] },
        { name: 'accounting receivable', children: [] },
        ], 
    },
    {
        name: 'finance',
        children: [],I
    }
]

const org2_depts = [
    {
    name: 'accounting',
    children: [
        { name: 'accounting payable', children: [] },
        {
         name: 'accounting receivable',
         children: [{ name: 'cash', children: []}, { name: 'check', children: [] }],
         }
    ]
},
{
    name: 'finance',
    children: [{ name: 'investment', children: {} }],
},
]