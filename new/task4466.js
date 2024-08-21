function editRoutesMethod(routes, subscriptions) {
    const map = new Map();
    subscriptions.forEach(sub => map.set(sub.name, sub) )

    function editFunction(route) {
        const sub = map.get(route.name);

        if (!sub.isSub) {

            if (route.comp) route.comp = 'UN';
            
            if (route.subComp) {
                route.subComp = route.subComp.map((sub) => {

                    sub.comp = 'UN';
                    
                    if (sub.subComp) editFunction(sub);

                    return sub;
                });
            }
        } else {
            if (route.subComp) {
                
                route.subComp = route.subComp.map(sub => {
                    const subSub = sub.subMod ? sub.subMod.find(s => s.name === sub.name) : null;
                    if (subSub.isSub) {
                        if (sub.subComp) editFunction(sub);
                    } 
                    else {
                        sub.comp = 'UN';
                    }

                    return sub;
                });
            }
        }
        return route;
    }

    let updatedRoutes = routes.map(route => editFunction(route));

    const firstModule = subscriptions.find(sub => sub.isSub);

    if (firstModule) {
        updatedRoutes = [{
            redirectTo: firstModule.name
        }, ...updatedRoutes];
    }

    return updatedRoutes;
}

const routes = [
    {
        name: 'M1',
        comp: 'C1',
    },
    {
        name: 'M2',
        comp: 'C2',
    },
    {
        name: 'M3',
        subComp: [
            {
                name: 'M3A',
                comp: 'C3A',
            },
            {
                name: 'M3B',
                comp: 'C3B',
            },
        ],
    },
    {
        name: 'M4',
        subComp: [
            {
                name: 'M4A',
                comp: 'C4A',
            },
            {
                name: 'M4B',
                comp: 'C4B',
            },
        ],
    },
    {
        name: 'M5',
        subComp: [
            {
                name: 'M5A',
                comp: 'C5A',
            },
            {
                name: 'M5B',
                subComp: [
                    {
                        name: 'M5BA',
                        comp: 'C5BA',
                    },
                    {
                        name: 'M5BB',
                        comp: 'C5BB',
                    },
                    {
                        name: 'M5BC',
                        comp: 'C5BC',
                    },
                ],
            },
            {
                name: 'M5C',
                comp: 'C5C',
            },
        ],
    },
];

const subscriptions = [
    {
        name: 'M1',
        isSub: true,
    },
    {
        name: 'M2',
        isSub: false,
    },
    {
        name: 'M3',
        isSub: false,
        subMod: [
            {
                name: 'M3A',
                isSub: true,
            },
            {
                name: 'M3B',
                isSub: true,
            },
        ],
    },
    {
        name: 'M4',
        isSub: true,
        subMod: [
            {
                name: 'M4A',
                isSub: false,
            },
            {
                name: 'M4B',
                isSub: true,
            },
        ],
    },
    {
        name: 'M5',
        isSub: true,
        subMod: [
            {
                name: 'M5A',
                isSub: false,
            },
            {
                name: 'M5B',
                isSub: true,
                subComp: [
                    {
                        name: 'M5BA',
                        isSub: false,
                    },
                    {
                        name: 'M5BB',
                        isSub: true,
                    },
                    {
                        name: 'M5BC',
                        isSub: false,
                    },
                ],
            },
            {
                name: 'M5C',
                isSub: true,
            },
        ],
    },
];

console.log(editRoutesMethod(routes, subscriptions));