export  function toggleLesson(module,lesson) {
    return{
        type:'SET_ACTIVE_LESSON',
        module,
        lesson,
    }; 
 }