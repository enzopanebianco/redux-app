const INITIAL_STATE = {
                                    
    activeLesson:'',
    activeModule:'',
    modules:[{
        id:1,
        title:"React",
        lessons:[{
            id:1,
            title:"Primeira Aula"
        },{
            id:2,
            title:"Segunda Aula"
        }]
    },
    {
        id:2,
        title:"React Native",
        lessons:[{
            id:3,
            title:"Terceira Aula"
        },{
            id:4,
            title:"Quarta Aula"
        
        },{
            id:5,
            title:"Quinta Aula"
        }
    ]
    }
]
};


export default function course(state=INITIAL_STATE,action) {
    if (action.type ==="SET_ACTIVE_LESSON") {
        return{
            ...state,
            activeLesson:action.lesson,
            activeModule:action.module
        }
    }
    return state;
}