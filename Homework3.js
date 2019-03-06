/* Main function to be called from HTML page */
function Main() {
    
    var boxes = document.getElementsByClassName('box');
    
    /* Create organization 1 */
    PrintDepts(org1_depts, boxes[0]);

    /* Create organization 2 */
    PrintDepts(org2_depts, boxes[1]);
}

/* Recursively create unordered list of department based on depts data */
function PrintDepts(depts, parent) {
    if(depts.length > 0) {
        var ul = document.createElement('ul');
        parent.appendChild(ul);
    }
    
    for(var i=0; i < depts.length; i++) {

        var li = document.createElement('li');
        li.innerHTML = depts[i].name;
        ul.appendChild(li);

        if(depts[i].children) {
            PrintDepts(depts[i].children, li);
        }
    }  
}

/* organization 1 data  */
const org1_depts = [
    {
        name: 'accounting',
        children: [
        { 
            name: 'accounting payable', 
            children: [] 
        },
        { 
            name: 'accounting receivable', 
            children: [] 
        },
        ]
    },
    {
        name: 'finance',
        children: [],
    },
]

/* organization 2 data */
const org2_depts = [
    {
        name: 'accounting',
        children: [
        { 
            name: 'accounting payable', 
            children: [] 
        },
        {
            name: 'accounting receivable',
            children: [
                { 
                    name: 'cash', 
                    children: []
                }, 
                { 
                    name: 'check', 
                    children: [] 
                }
            ],
        }
        ]
    },
    {
        name: 'finance',
        children: [
            {
                name: 'investment', 
                children: {} 
            }
        ]
    }
]